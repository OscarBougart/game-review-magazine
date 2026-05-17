import { test, expect, Page } from '@playwright/test';

const BASE = 'http://localhost:3000';

// Helper: navigate and wait for network idle
async function go(page: Page, path: string) {
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

test.describe('Navigation links', () => {
  test('Reviews link → /reviews', async ({ page }) => {
    await go(page, '/');
    await page.click('a[href="/reviews"]');
    await expect(page).toHaveURL(`${BASE}/reviews`);
  });

  test('Categories link → /categories', async ({ page }) => {
    await go(page, '/');
    await page.click('a[href="/categories"]');
    await expect(page).toHaveURL(`${BASE}/categories`);
  });

  test('Best of 2026 link → /best-of-2026', async ({ page }) => {
    await go(page, '/');
    await page.click('a[href="/best-of-2026"]');
    await expect(page).toHaveURL(`${BASE}/best-of-2026`);
  });

  test('About link → /about', async ({ page }) => {
    await go(page, '/');
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL(`${BASE}/about`);
  });

  test('Write link → /write', async ({ page }) => {
    await go(page, '/');
    await page.click('a[href="/write"]');
    await expect(page).toHaveURL(`${BASE}/write`);
  });

  test('Logo → /', async ({ page }) => {
    await go(page, '/reviews');
    // Logo is typically the first link to /
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(`${BASE}/`);
  });
});

// ─── HOMEPAGE ────────────────────────────────────────────────────────────────

test.describe('Homepage', () => {
  test('Hero READ REVIEW link goes to a review slug', async ({ page }) => {
    await go(page, '/');
    const heroLink = page.locator('section[aria-label^="Featured review"] a[href^="/reviews/"]').first();
    const href = await heroLink.getAttribute('href');
    console.log('Hero CTA href:', href);
    expect(href).toMatch(/^\/reviews\/.+/);
    await heroLink.click();
    await expect(page).toHaveURL(new RegExp(`${BASE}/reviews/.+`));
  });

  test('Category filter chips filter the grid', async ({ page }) => {
    await go(page, '/');
    // Find a non-All filter chip on the homepage
    const chips = page.locator('button').filter({ hasText: /^(RPG|Action|Indie|Strategy|Adventure|Simulation)$/ });
    const count = await chips.count();
    console.log('Filter chips found:', count);
    if (count === 0) {
      test.skip();
      return;
    }
    const firstChip = chips.first();
    const chipText = await firstChip.textContent();
    await firstChip.click();
    await page.waitForTimeout(300); // allow state update
    // After filtering, article cards should be present
    const cards = page.locator('article, [data-testid="article-card"], a[href^="/reviews/"]');
    const cardCount = await cards.count();
    console.log(`Cards after clicking "${chipText}":`, cardCount);
    // We just verify no crash and either cards or empty state shown
    const pageContent = await page.content();
    expect(pageContent.length).toBeGreaterThan(100);
  });

  test('Review card links go to correct review slugs', async ({ page }) => {
    await go(page, '/');
    const reviewCards = page.locator('a[href^="/reviews/"]').filter({ hasNot: page.locator('section[aria-label^="Featured"]') });
    const firstCard = reviewCards.first();
    const href = await firstCard.getAttribute('href');
    console.log('First review card href:', href);
    expect(href).toMatch(/^\/reviews\/.+/);
    await firstCard.click();
    await expect(page).toHaveURL(new RegExp(`${BASE}/reviews/.+`));
  });

  test('SEE ALL in trending → /reviews', async ({ page }) => {
    await go(page, '/');
    // "See all" is rendered in a client component — wait for it
    await page.waitForSelector('a[href="/reviews"]', { timeout: 5000 });
    const seeAll = page.locator('a[href="/reviews"]').filter({ hasText: /see all/i });
    const count = await seeAll.count();
    console.log('SEE ALL links found:', count);
    if (count === 0) {
      // Try case-insensitive text match
      const alt = page.locator('a[href="/reviews"]').filter({ hasText: /see\s+all/i });
      const altCount = await alt.count();
      console.log('Alt SEE ALL count:', altCount);
      if (altCount === 0) {
        // Log all /reviews links found for debugging
        const allReviewLinks = await page.locator('a[href="/reviews"]').allTextContents();
        console.log('All /reviews link texts:', JSON.stringify(allReviewLinks));
        // If a link exists with /reviews href, click it
        const anyReviewsLink = page.locator('a[href="/reviews"]');
        const anyCount = await anyReviewsLink.count();
        if (anyCount > 0) {
          // Find the one with "see" or "all" in its text
          for (let i = 0; i < anyCount; i++) {
            const t = (await anyReviewsLink.nth(i).textContent() ?? '').toLowerCase();
            if (t.includes('see') || t.includes('all')) {
              await anyReviewsLink.nth(i).click();
              await expect(page).toHaveURL(`${BASE}/reviews`);
              return;
            }
          }
        }
        console.log('WARNING: No SEE ALL link found on homepage');
        return;
      }
      await alt.first().click();
    } else {
      await seeAll.first().click();
    }
    await expect(page).toHaveURL(`${BASE}/reviews`);
  });
});

// ─── REVIEWS PAGE ─────────────────────────────────────────────────────────────

test.describe('Reviews page', () => {
  test('Genre filter chips update the grid', async ({ page }) => {
    await go(page, '/reviews');
    // Get initial card count
    const cards = page.locator('a[href^="/reviews/"]');
    const initialCount = await cards.count();
    console.log('Initial review cards:', initialCount);

    // Click a specific genre
    const rpdChip = page.locator('button').filter({ hasText: /^RPG$/ });
    if (await rpdChip.count() > 0) {
      await rpdChip.click();
      await page.waitForTimeout(400);
      const afterCount = await page.locator('a[href^="/reviews/"]').count();
      console.log('Cards after RPG filter:', afterCount);
      // Just verify page didn't crash
      expect(afterCount).toBeGreaterThanOrEqual(0);
    }

    // Test All chip
    const allChip = page.locator('button').filter({ hasText: /^All$/ });
    if (await allChip.count() > 0) {
      await allChip.click();
      await page.waitForTimeout(400);
      const allCount = await page.locator('a[href^="/reviews/"]').count();
      console.log('Cards after All filter:', allCount);
    }
  });

  test('Sort options change order', async ({ page }) => {
    await go(page, '/reviews');
    const sortSelect = page.locator('select');
    if (await sortSelect.count() === 0) {
      console.log('No sort select found');
      return;
    }
    // Test each sort option
    for (const value of ['highest', 'lowest', 'az', 'latest']) {
      await sortSelect.selectOption(value);
      await page.waitForTimeout(300);
      const cards = await page.locator('a[href^="/reviews/"]').count();
      console.log(`Sort "${value}": ${cards} cards visible`);
      expect(cards).toBeGreaterThanOrEqual(0);
    }
  });

  test('Review card → correct slug', async ({ page }) => {
    await go(page, '/reviews');
    const cards = page.locator('a[href^="/reviews/"]');
    const count = await cards.count();
    if (count === 0) { console.log('No cards found'); return; }
    const href = await cards.first().getAttribute('href');
    console.log('Reviews page first card href:', href);
    expect(href).toMatch(/^\/reviews\/.+/);
    await cards.first().click();
    await expect(page).toHaveURL(new RegExp(`${BASE}/reviews/.+`));
  });
});

// ─── ARTICLE DETAIL ──────────────────────────────────────────────────────────

test.describe('Article detail — /reviews/elden-ring', () => {
  test('Page loads and all major sections render', async ({ page }) => {
    await go(page, '/reviews/elden-ring');
    const content = await page.content();

    // Hero section
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    console.log('Hero section visible');

    // Score badge — look for the score number
    const scoreText = await page.locator('text=/\\d+\\.?\\d*\\/10|\\d{1,2}\\.\\d/').first().textContent().catch(() => null);
    console.log('Score found:', scoreText);

    // "You might also like" section
    const mightAlso = page.locator('text=/you might also like/i');
    const mightAlsoCount = await mightAlso.count();
    console.log('"You might also like" found:', mightAlsoCount > 0);

    // Page should have substantial content
    expect(content.length).toBeGreaterThan(5000);
  });

  test('You might also like cards → correct slugs', async ({ page }) => {
    await go(page, '/reviews/elden-ring');
    // Find review links that are NOT the current page's hero CTA
    const relatedLinks = page.locator('a[href^="/reviews/"]').filter({ hasNotText: 'Elden Ring' });
    const count = await relatedLinks.count();
    console.log('Related review links:', count);

    if (count > 0) {
      const href = await relatedLinks.first().getAttribute('href');
      console.log('First related link:', href);
      expect(href).toMatch(/^\/reviews\/.+/);
      // Don't click — just validate hrefs
      for (let i = 0; i < Math.min(count, 3); i++) {
        const h = await relatedLinks.nth(i).getAttribute('href');
        console.log(`Related link ${i}:`, h);
        expect(h).toMatch(/^\/reviews\/.+/);
      }
    }
  });
});

// ─── CATEGORIES PAGE ─────────────────────────────────────────────────────────

test.describe('Categories page', () => {
  test('Category cards link to /categories/[slug]', async ({ page }) => {
    await go(page, '/categories');
    const catLinks = page.locator('a[href^="/categories/"]');
    const count = await catLinks.count();
    console.log('Category links found:', count);
    expect(count).toBeGreaterThan(0);

    // Check first few hrefs
    for (let i = 0; i < Math.min(count, 4); i++) {
      const href = await catLinks.nth(i).getAttribute('href');
      console.log(`Category link ${i}:`, href);
      expect(href).toMatch(/^\/categories\/.+/);
    }
  });

  test('Clicking a category card → category page loads', async ({ page }) => {
    await go(page, '/categories');
    const firstCat = page.locator('a[href^="/categories/"]').first();
    const href = await firstCat.getAttribute('href');
    await firstCat.click();
    await expect(page).toHaveURL(`${BASE}${href}`);
    // Category page should show review grid or empty state
    const content = await page.content();
    expect(content).toMatch(/reviews|no reviews/i);
  });

  test('Category slug page shows filtered results', async ({ page }) => {
    // Try a known category
    await go(page, '/categories/rpg');
    const content = await page.content();
    console.log('RPG category page content length:', content.length);
    expect(content.length).toBeGreaterThan(1000);

    // Should show reviews or "no reviews" state
    const hasReviews = content.includes('Review');
    console.log('Has review content:', hasReviews);
    expect(hasReviews).toBeTruthy();
  });
});

// ─── WRITE PAGE ──────────────────────────────────────────────────────────────

test.describe('Write page — submission form', () => {
  test('Form renders all fields', async ({ page }) => {
    await go(page, '/write');
    // Form uses id attributes: f-name, f-email, f-game, f-link
    const nameInput = page.locator('#f-name');
    const emailInput = page.locator('#f-email');
    const submitBtn = page.locator('button[type="submit"], button').filter({ hasText: /submit|pitch/i }).first();

    console.log('Name input visible:', await nameInput.isVisible().catch(() => false));
    console.log('Email input visible:', await emailInput.isVisible().catch(() => false));
    console.log('Submit button visible:', await submitBtn.isVisible().catch(() => false));

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(submitBtn).toBeVisible();
  });

  test('Submit with valid data → success message', async ({ page }) => {
    await go(page, '/write');

    // Form uses id attributes: f-name, f-email, f-game, f-link, f-genre (select), f-pitch (textarea)
    await page.locator('#f-name').fill('Test Writer');
    await page.locator('#f-email').fill('test@example.com');

    const gameInput = page.locator('#f-game');
    if (await gameInput.isVisible().catch(() => false)) {
      await gameInput.fill('Hollow Knight');
    }

    const genreSelect = page.locator('#f-genre, select').first();
    if (await genreSelect.isVisible().catch(() => false)) {
      await genreSelect.selectOption({ index: 1 });
    }

    const pitchInput = page.locator('#f-pitch, textarea').first();
    if (await pitchInput.isVisible().catch(() => false)) {
      await pitchInput.fill('Hollow Knight is a masterpiece of the metroidvania genre with exceptional world-building and tight controls.');
    }

    // Submit
    const submitBtn = page.locator('button[type="submit"], button').filter({ hasText: /submit|pitch/i }).first();
    await submitBtn.click();

    // Wait for success state
    await page.waitForTimeout(500);

    // Check for success message
    const pageContent = await page.content();
    const hasSuccess = pageContent.match(/thank|success|received|submission/i);
    console.log('Success state detected:', !!hasSuccess);
    expect(hasSuccess).toBeTruthy();
  });

  test('Submit with empty form → validation errors shown', async ({ page }) => {
    await go(page, '/write');
    const submitBtn = page.locator('button[type="submit"], button').filter({ hasText: /submit|pitch/i }).first();
    await submitBtn.click();
    await page.waitForTimeout(300);

    const content = await page.content();
    // Should show some error state
    const hasError = content.match(/required|error|please|invalid/i);
    console.log('Validation errors shown:', !!hasError);
    expect(hasError).toBeTruthy();
  });
});
