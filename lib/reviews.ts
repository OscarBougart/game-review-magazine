export type Category = 'All' | 'Action' | 'RPG' | 'Strategy' | 'Indie';

export interface Review {
  id: string;
  slug: string;
  title: string;
  developer: string;
  publisher: string;
  platform: string;
  year: number;
  category: Exclude<Category, 'All'>;
  score: number;
  excerpt: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ScoreBreakdown {
  gameplay: number;
  visuals: number;
  audio: number;
  longevity: number;
}

export interface ReviewDetail extends Review {
  reviewer: string;
  publishedDate: string;
  openingVerdict: string;
  body: string[];
  pullQuote: string;
  verdict: string;
  scoreBreakdown: ScoreBreakdown;
  relatedSlugs: string[];
}

export const CATEGORIES: Category[] = ['All', 'Action', 'RPG', 'Strategy', 'Indie'];

export const FEATURED_REVIEW: Review = {
  id: '1',
  slug: 'elden-ring',
  title: 'Elden Ring',
  developer: 'FromSoftware',
  publisher: 'Bandai Namco',
  platform: 'PC / PS5 / Xbox',
  year: 2022,
  category: 'Action',
  score: 10,
  excerpt:
    'A generation-defining open world that treats the player as an intelligent adult. Every vista earned, every death a lesson, every discovery a quiet triumph.',
  imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_hero.jpg',
  featured: true,
};

export const REVIEWS: Review[] = [
  {
    id: '2',
    slug: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    platform: 'PC / PS5',
    year: 2023,
    category: 'RPG',
    score: 10,
    excerpt: 'The first RPG in a decade that feels genuinely limitless. Larian built a D&D campaign that reacts to everything.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg',
  },
  {
    id: '3',
    slug: 'hades-ii',
    title: 'Hades II',
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    platform: 'PC (Early Access)',
    year: 2024,
    category: 'Action',
    score: 9,
    excerpt: 'Supergiant somehow improved on a perfect formula. The combat is tighter, the story darker, the secrets deeper.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/capsule_616x353.jpg',
  },
  {
    id: '5',
    slug: 'disco-elysium',
    title: 'Disco Elysium',
    developer: 'ZA/UM',
    publisher: 'ZA/UM',
    platform: 'PC',
    year: 2019,
    category: 'RPG',
    score: 10,
    excerpt: "A novel disguised as an RPG. The writing alone justifies the medium's existence.",
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/632470/capsule_616x353.jpg',
  },
  {
    id: '6',
    slug: 'into-the-breach',
    title: 'Into the Breach',
    developer: 'Subset Games',
    publisher: 'Subset Games',
    platform: 'PC / Switch',
    year: 2018,
    category: 'Strategy',
    score: 9,
    excerpt: 'Perfect information, perfect design. Every puzzle has a solution — finding it is the entire game.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/590380/capsule_616x353.jpg',
  },
  {
    id: '7',
    slug: 'hollow-knight',
    title: 'Hollow Knight',
    developer: 'Team Cherry',
    publisher: 'Team Cherry',
    platform: 'PC / Switch / PS4',
    year: 2017,
    category: 'Indie',
    score: 9,
    excerpt: 'An underground world built with more care than most AAA studios manage with hundred-million-dollar budgets.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg',
  },
  {
    id: '8',
    slug: 'frostpunk-2',
    title: 'Frostpunk 2',
    developer: '11 bit studios',
    publisher: '11 bit studios',
    platform: 'PC',
    year: 2024,
    category: 'Strategy',
    score: 8,
    excerpt: 'The sequel expands the canvas — more city, more politics, more impossible choices. Harder to love, harder to put down.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1601580/capsule_616x353.jpg',
  },
  {
    id: '9',
    slug: 'neon-white',
    title: 'Neon White',
    developer: 'Angel Matrix',
    publisher: 'Annapurna Interactive',
    platform: 'PC / Switch',
    year: 2022,
    category: 'Indie',
    score: 8,
    excerpt: "A speedrunner's fantasy wrapped in anime schlock. The card-based movement system is one of the year's best ideas.",
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1533420/header.jpg',
  },
  {
    id: '10',
    slug: 'remnant-ii',
    title: 'Remnant II',
    developer: 'Gunfire Games',
    publisher: 'Gearbox Publishing',
    platform: 'PC / PS5 / Xbox',
    year: 2023,
    category: 'Action',
    score: 8,
    excerpt: 'A Soulslike shooter that earns every comparison. Procedural worlds hide secrets that reward obsessive players.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1282100/header.jpg',
  },
];

export const ALL_REVIEWS: Review[] = [FEATURED_REVIEW, ...REVIEWS];

export const TRENDING = [...REVIEWS]
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);

export const REVIEW_DETAILS: Record<string, ReviewDetail> = {
  'elden-ring': {
    ...FEATURED_REVIEW,
    reviewer: 'Marcus Vane',
    publishedDate: 'March 2, 2022',
    openingVerdict:
      'Elden Ring is the kind of game that arrives once in a generation and immediately reframes everything that came before it. FromSoftware has taken the oppressive, vertical dungeons of Dark Souls and laid them flat across a horizon that never stops surprising you — and in doing so has created the definitive argument for why open worlds need not be theme parks.',
    body: [
      "The Lands Between is not a comfortable place to be. From the moment you crawl out of the tutorial cave and the camera tilts back to reveal a sky stained gold, the world communicates its scale with a quiet menace. There are no waypoints. No quest tracker. No minimap cluttered with icons demanding attention. There is only the land, a horse, and the distant silhouette of something enormous that you will eventually need to kill.",
      "What FromSoftware has always understood — and what most open-world designers still do not — is that discovery only has weight when it costs something. Every Erdtree branch glowing in the distance is a promise. Every underground lake hiding an entire lost civilisation is a reward for jumping off a ledge that looked like a dead end. The game extends trust to the player in a way that most contemporary titles are too nervous to attempt.",
      "The combat is the series at its most fluid. The addition of jumping to the classic dodge-and-attack vocabulary sounds minor on paper; in practice it transforms encounters entirely. Bosses that would have been positional puzzles in Dark Souls become three-dimensional dances. The mounted combat against field bosses — most of them optional, all of them extraordinary — feels like a different genre entirely, the Torrent button the best new input in action games this decade.",
      "The boss roster is the best in the studio's history, which is saying something. Margit the Fell Omen, encountered within the first hour, functions as a masterclass in the series' difficulty philosophy: he is not unfair, he is instructive. Every attack has a tell. Every death is a piece of information. By the time you reach Malenia — a boss so beautifully designed and so brutally demanding that the internet mobilised to help strangers defeat her — you are a different player than you were when you started.",
      "It is not a perfect game. The latter third of the Lands Between buckles slightly under the weight of legacy dungeons that feel recycled from earlier in the playthrough, and the lore — distributed across item descriptions and environmental storytelling in the series tradition — requires an investment that casual players may find impenetrable. The network code at launch was a genuine embarrassment for a release of this scale.",
      "But these are footnotes in an otherwise monumental achievement. Elden Ring is the fullest expression yet of what FromSoftware has been building toward since Demon's Souls: a world that respects the player's intelligence completely, punishes their carelessness without cruelty, and makes every hard-won foothold feel like genuine accomplishment. It is the closest thing gaming has to a serious literary experience — dense, demanding, and unforgettable.",
    ],
    pullQuote:
      'Every death is a piece of information. By the time you reach Malenia, you are a different player than you were when you started.',
    verdict:
      "Elden Ring is not merely an excellent game — it is a statement about what the medium can be when it refuses to condescend to its audience. FromSoftware has built something that will define the decade and embarrass imitators for years to come. A rare and genuine ten.",
    scoreBreakdown: { gameplay: 10, visuals: 9, audio: 10, longevity: 10 },
    relatedSlugs: ['hades-ii', 'remnant-ii'],
  },

  'baldurs-gate-3': {
    ...REVIEWS.find((r) => r.slug === 'baldurs-gate-3')!,
    reviewer: 'Sienna Park',
    publishedDate: 'August 14, 2023',
    openingVerdict:
      "Baldur's Gate 3 is the rare RPG that makes good on every promise the genre has ever made. Larian Studios has built a D&D campaign so responsive to player choice that it begins to feel less like a game and more like a collaborative act of storytelling — one where the author has prepared for every catastrophic decision you might make.",
    body: [
      "There is a moment early in the first act where you can persuade a goblin to shoot her own leader in the face, triggering a chain of events that dissolves an entire questline without a single fight. It is funny, it is unexpected, and it is completely consistent with the world's internal logic. Baldur's Gate 3 is full of moments like this — moments where the game's systems bend to your intent in ways that feel genuinely surprising even fifty hours in.",
      "The foundation is fifth-edition Dungeons & Dragons, implemented with enough fidelity to satisfy tabletop veterans and enough clarity to welcome newcomers. The turn-based combat is tactical and deep: high ground matters, surfaces can be set alight or electrified, and every character in your party has a toolkit of abilities that interact in ways you will still be discovering in your third playthrough.",
      "The companion writing is exceptional by any standard and extraordinary by RPG standards. Shadowheart, Astarion, Gale, Lae'zel, Wyll, Karlach — each carries a fully realised arc that responds to your choices with a granularity that shames the conversation trees of earlier Bioware titles. The voice performances are uniformly excellent; several are genuinely moving.",
      "The world itself — spanning the nautiloid crash site through the Underdark and into the city of Baldur's Gate proper — is built with a density that rewards lateral exploration. Secret passages lead to optional bosses. Seemingly throwaway conversations unlock entire questlines. The game's commitment to reactivity extends to the third act, a feat of design ambition that would have been beyond most studios.",
      "There are cracks. The third act, despite its scope, feels slightly less finished than the first two — certain quest threads are wrapped up abruptly, and the city itself, while visually impressive, lacks the intimacy of the early wilderness sections. Performance on lower-end hardware remains inconsistent, and multiplayer co-op, while functional, introduces pacing complications the game was not entirely designed around.",
      "None of it matters much. Baldur's Gate 3 is a reference point — the game that raises the ceiling for what collaborative storytelling in an RPG can achieve. It will be studied, imitated, and probably never equalled for a decade.",
    ],
    pullQuote:
      'A D&D campaign so responsive to player choice that it begins to feel less like a game and more like a collaborative act of storytelling.',
    verdict:
      "Larian has built the RPG that the genre has been promising since Planescape: Torment. Staggeringly deep, brilliantly written, and reactive in ways that will make you forget you are playing a computer game. The essential RPG of its generation.",
    scoreBreakdown: { gameplay: 10, visuals: 9, audio: 9, longevity: 10 },
    relatedSlugs: ['disco-elysium', 'elden-ring'],
  },

  'hades-ii': {
    ...REVIEWS.find((r) => r.slug === 'hades-ii')!,
    reviewer: 'Luca Strand',
    publishedDate: 'May 9, 2024',
    openingVerdict:
      "The original Hades was, by most measures, a complete game — a roguelite with combat so fluid it felt unfair, a narrative structure that made repetition feel like progress, and a level of craft that belonged to something that cost three times as much. Hades II improves on it in almost every dimension, which was not supposed to be possible.",
    body: [
      "You play as Melinoë, younger sister to Zagreus and prisoner of Chronos, the Titan of Time. The setup is less domestic than the original — the Underworld is occupied, the family scattered, and the goal is survival rather than reunion. The emotional register is darker, the stakes higher, and the writing is sharp enough to make the exposition feel earned rather than obligatory.",
      "The combat has been expanded rather than complicated. Melinoë's sprint replaces Zagreus' dash but behaves differently — directional, slightly longer, carrying a different rhythm that takes time to internalise. The cast system, unique to Melinoë, adds a planted magic circle to encounters that rewards spatial awareness. Together these additions make the moment-to-moment feel genuinely distinct rather than cosmetically altered.",
      "The weapon roster at launch — the Witch's Staff, the Argent Skull, the Twin Fists — all have individual mechanical identities that reward specialisation. Boon combinations, already the strategic heart of the first game, have been expanded with Arcana cards: a passive upgrade tree that persists across runs and lets you customise your base kit before the first room. The depth here is significant; this is a roguelite with genuine build theory.",
      "The world design is the most obvious expansion. Hades II takes you both downward into the Underworld and upward to the surface, with two distinct biome paths that feel genuinely different in atmosphere and enemy composition. The Rift of Thessaly — the surface overworld — is alive with a melancholic daylight beauty that plays against the infernal palette of the depths. Moving between them across a single run is one of the better structural ideas in recent memory.",
      "As an Early Access title it is inevitably incomplete. The second surface region is absent, certain boons feel undertuned, and the final boss of the downward path — while impressive — does not yet have the climactic weight of Hades' endgame. These are scaffolding problems, not design failures.",
      "What is here is already among the best action games of the decade. Supergiant has once again built a game that makes all the fundamentals feel effortless — enemy tells are legible, death feels fair, and every run reveals something new. The 1.0 release will be one of the most anticipated in recent memory.",
    ],
    pullQuote:
      'Supergiant has built a game where every run reveals something new. The 1.0 release will be one of the most anticipated in recent memory.',
    verdict:
      'Even in Early Access, Hades II is a masterpiece in progress. The combat is tighter, the world larger, the writing darker. A rare sequel that improves on something that was already near-perfect.',
    scoreBreakdown: { gameplay: 10, visuals: 9, audio: 10, longevity: 9 },
    relatedSlugs: ['elden-ring', 'hollow-knight'],
  },

  'disco-elysium': {
    ...REVIEWS.find((r) => r.slug === 'disco-elysium')!,
    reviewer: 'Priya Holst',
    publishedDate: 'October 17, 2019',
    openingVerdict:
      "Disco Elysium is a novel. That is not a compliment designed to elevate it above other games — it is a literal description of what ZA/UM has built: a dense, authored, politically serious work of fiction that happens to be navigated through the conventions of a point-and-click RPG. It is also the best-written game ever made.",
    body: [
      "You are a detective. You don't know your name, your past, or the body lying on the noose in the backyard. Your task is to solve a murder in Revachol — a city that lost a revolution thirty years ago and has been rotting in the aftermath ever since. The mystery is fine. The city is extraordinary.",
      "Revachol Martinaise is a district of a failed world, and ZA/UM has constructed it with the specificity of a novelist who has spent years living there. The dock workers who strike with collective melancholy, the ideological fossils still rehearsing arguments from the insurrection, the commercial interests who wear the revolution's corpse as a fashion accessory — every NPC is a citizen of this world, not a game asset.",
      "Your inner dialogue is externalised as a set of skill voices — facets of the detective's fractured psyche that surface depending on which of his attributes are dominant. A high Inland Empire character hears metaphysical portents from objects in the environment. A high Electrochemistry detective is constantly negotiating with his addiction. These voices are written with such distinctness and wit that they constitute a cast of characters entirely within the player character's own skull.",
      "The RPG systems serve the writing rather than competing with it. Skill checks are the primary mechanic — roll dice, succeed or fail, watch the world react. Failure is often more interesting than success. White checks can be retried after levelling up; red checks are permanent, and failing them sometimes unlocks content unavailable to successful players. The result is a game where competence and failure both produce narrative.",
      "The politics are genuinely engaged, not decorative. Disco Elysium takes communism, liberalism, fascism, and moralism seriously as ideological systems — letting the player inhabit their internal logics while never endorsing any of them uncritically. This is harder than it sounds. Most games with political content reach for the both-sides shrug. ZA/UM has opinions.",
      "The Final Cut additions — voice acting throughout, new quests, expanded skill descriptions — add texture without changing what was already a complete work. It is a longer, richer, more legible version of something that did not need fixing.",
    ],
    pullQuote:
      "ZA/UM has built the best-written game ever made. The mystery is fine. The city is extraordinary. The detective's inner voices are a cast unto themselves.",
    verdict:
      "Disco Elysium is not a game for everyone. It demands patience, literacy, and a tolerance for failure as a narrative mode. It rewards these demands with the most fully realised fictional world in the medium's history. An essential work.",
    scoreBreakdown: { gameplay: 9, visuals: 9, audio: 8, longevity: 10 },
    relatedSlugs: ['baldurs-gate-3', 'into-the-breach'],
  },

  'into-the-breach': {
    ...REVIEWS.find((r) => r.slug === 'into-the-breach')!,
    reviewer: 'Marcus Vane',
    publishedDate: 'March 1, 2018',
    openingVerdict:
      "Into the Breach is a chess problem that generates itself. In an era when strategy games compete to be the most complex, Subset Games has made something that fits on a screen the size of a postage stamp and contains more meaningful decisions per minute than titles ten times its size.",
    body: [
      "The premise is economical: giant insects (the Vek) are attacking the last remaining cities of a future Earth. You control three mechs — no more — and must survive a set number of missions to unlock a new island and eventually defeat the source of the infestation. You will fail. You will time-travel back to try again with a different squad. The loop is tight enough to feel like a puzzle game, wide enough to feel like a strategy game.",
      "What makes Into the Breach work at a design level is perfect information. You can always see exactly what the Vek are going to do next turn. Every enemy telegraphs its intention with an arrow and a target square. The question is never what will happen — it is what you can do about it. The result is a tactical game that functions like a puzzle: constrained, solvable, deeply satisfying when the solution reveals itself.",
      "The mech squads — unlocked through successful runs — each represent a complete rethinking of the game's verbs. The Flame Behemoths fight with fire that damages both enemies and the buildings you are protecting. The Frozen Titans immobilise rather than kill. The Steel Judoka flip enemies rather than shoot them, using the Vek as projectiles against each other. Each squad makes the game feel new.",
      "The grid is three-by-eight. The units are three. The systems are a handful. And yet the emergent complexity is such that you will still be encountering new interactions — new push chains, new environmental interactions, new self-inflicted disasters — after thirty hours. Subset's insight was that depth does not require breadth. Sometimes it requires exceptional restraint.",
      "The presentation suits the philosophy: pixel art that is readable at a glance, a John Gutiérrez score that shifts between contemplative piano and synth urgency with precision, a UI that answers every question before you think to ask it. Nothing wastes your attention.",
      "Its one limitation is also its nature: it is a puzzle game, and like all puzzle games it has a ceiling. Once you have mastered each squad and understand the full vocabulary of the Vek's attack patterns, the randomisation that drives replay value reaches its limit. The Advanced Edition additions — new weapons, new squads, new island environments — raise that ceiling considerably, but the game never pretends to be something with infinite depth.",
    ],
    pullQuote:
      'The question is never what will happen — it is what you can do about it. A tactical game that functions like a puzzle: constrained, solvable, deeply satisfying.',
    verdict:
      'Into the Breach is one of the most precisely designed strategy games ever made. Subset has demonstrated that mechanical depth and spatial simplicity are not opposites. An essential forty hours for anyone who cares about how games think.',
    scoreBreakdown: { gameplay: 10, visuals: 8, audio: 9, longevity: 8 },
    relatedSlugs: ['frostpunk-2', 'disco-elysium'],
  },

  'hollow-knight': {
    ...REVIEWS.find((r) => r.slug === 'hollow-knight')!,
    reviewer: 'Sienna Park',
    publishedDate: 'February 24, 2017',
    openingVerdict:
      "Hollow Knight is the product of three people in Adelaide, a Kickstarter campaign that asked for thirty-five thousand dollars, and a development period that stretched far beyond what anyone had anticipated. The result is a metroidvania with the world-building density of a Miyazaki title and combat that is cleaner than most AAA action games released in the same year.",
    body: [
      "Hallownest is a fallen kingdom of insects. The Knight arrives with no explanation, descends into the ruins, and begins to piece together what happened. The narrative is environmental — scattered through tomb inscriptions, boss memories, and NPC fragments — and ZA/UM it is precise and elegiac. Team Cherry has built a world whose tragedy accumulates gradually, so that by the time you understand what was lost, you have already spent forty hours living among its ruins.",
      "The movement is the foundation. The Knight's nail — a bone sword — has a speed and arc that rewards commitment. You cannot afford to swing casually; the dodge roll that would save you in a more forgiving game is absent, replaced by a sharp dash that requires direction and timing. The result is combat that feels consequential: every hit landed and taken matters.",
      "The charm system — equippable upgrades that modify everything from movement to attack patterns — gives the late game a build-theory quality that the early game withholds wisely. You find charms throughout the world; you understand their individual effects; eventually you begin combining them into loadouts tuned to specific boss encounters. The system is deep without being legible until you have spent enough time with it to earn that legibility.",
      "The boss roster is excellent and varied. Some are pattern memorisation. Some are aggressive enough to demand read-and-react rather than preparation. The Radiance — the final boss — is a gauntlet of everything the game has taught you, mounted behind a lengthy dream sequence that functions as a last chance for the story to land its emotional payload. It does.",
      "The size is the most impressive thing. Hollow Knight is enormous by indie standards and large by any standard: a map that keeps expanding past the point where you expect it to end, with new biomes that introduce new enemy types, new movement verbs, and new narrative threads. The Grimm Troupe and Godmaster DLC add further content that would, priced separately, represent full value.",
      "Its difficulty will exclude some players, and that is a genuine cost. The lack of a difficulty selector is a design philosophy, not an oversight, but it means that the second half of the game — when encounters become demanding enough to require genuine mastery — will end runs prematurely for players who came for exploration rather than combat. This is worth knowing before you invest.",
    ],
    pullQuote:
      "Team Cherry built a world whose tragedy accumulates gradually, so that by the time you understand what was lost, you've already spent forty hours living among its ruins.",
    verdict:
      'Hollow Knight is an indie game that competes with anything. Team Cherry built a world of extraordinary density and sadness, then put combat at its centre that is worth the difficulty it demands. One of the decade\'s essential games.',
    scoreBreakdown: { gameplay: 9, visuals: 10, audio: 10, longevity: 9 },
    relatedSlugs: ['hades-ii', 'neon-white'],
  },

  'frostpunk-2': {
    ...REVIEWS.find((r) => r.slug === 'frostpunk-2')!,
    reviewer: 'Luca Strand',
    publishedDate: 'September 20, 2024',
    openingVerdict:
      "Frostpunk 2 is a harder game to love than its predecessor. The original was a survival city-builder whose genius was emotional compression: every decision about coal allocation and labour policy carried the weight of faces. The sequel trades that intimacy for scale, moving from a single desperate city to a sprawling metropolis whose politics have become as lethal as the cold.",
    body: [
      "Thirty years have passed since the events of the first game. New London is no longer a struggling settlement — it is a city with factions, ideologies, and a political apparatus that fights over every resource allocation and every law you try to pass. You are no longer feeding people; you are managing their competing demands for freedom, tradition, comfort, and survival. The shift from survival to governance is intentional and makes Frostpunk 2 a substantially different game.",
      "The new political system is the centrepiece. Laws no longer pass by executive fiat — they must be voted through a council of faction representatives whose support you cultivate or coerce. Passing a heating conservation bill might require promising the Frostlanders autonomous districts. Promising the Frostlanders autonomous districts will anger the New Londoners. Angering the New Londoners will make your food rationing bill fail next session. The web of consequences is dense and occasionally overwhelming.",
      "The city-building has been rethought to match. You no longer place individual buildings — you zone districts, which then fill according to your resource priorities. The abstraction is intentional: 11 bit studios wants your attention on the political layer, not the pixel-perfect placement of heating pipes. Some of the tactile satisfaction of the original is lost in this translation, and that loss is real.",
      "The crises are brutal and original. A scouting party lost in the wastes whose survival means sacrificing fuel the city cannot spare. A food shortage that pits two factions against each other with only enough rations for one. A disease outbreak that can be contained only if you authorise research methods that will radicalise your libertarian faction. These scenarios force decisions that are genuinely hard rather than merely uncomfortable.",
      "The visuals are the best in the city-builder genre: a white-and-steel aesthetic that turns the frozen wasteland into something almost beautiful, with a day-night cycle and storm system that make the city feel alive even at scale. The score, by Piotr Musiał, is more orchestral than the first game's industrial sound design — sometimes too grand for the material, but mostly effective.",
      "Frostpunk 2 is not as immediately approachable or as emotionally direct as its predecessor. It demands patience with its systems and tolerance for losing political battles you felt you had won. But those who engage fully will find a game that asks harder questions and makes them feel the weight of answers in ways that few strategy games attempt.",
    ],
    pullQuote:
      'The web of political consequences is dense and occasionally overwhelming — a strategy game that asks harder questions than most and makes you feel their weight.',
    verdict:
      "A more ambitious and less immediately lovable game than the original. Frostpunk 2 trades survival intimacy for political complexity and earns most of that trade. Essential for strategy players willing to do the work it asks.",
    scoreBreakdown: { gameplay: 8, visuals: 9, audio: 8, longevity: 9 },
    relatedSlugs: ['into-the-breach', 'disco-elysium'],
  },

  'neon-white': {
    ...REVIEWS.find((r) => r.slug === 'neon-white')!,
    reviewer: 'Marcus Vane',
    publishedDate: 'June 16, 2022',
    openingVerdict:
      "Neon White has no interest in your time. It will take it anyway. Angel Matrix's speedrunning platformer is dressed in visual novel anime schlock and contains, somewhere underneath, one of the most inventive movement systems in years — a card mechanic that turns every level into an optimisation problem with a solution elegant enough to make you replay it immediately.",
    body: [
      "The premise is a competitive afterlife: assassins called Whites race through Heaven killing demons, competing for the chance at a permanent resurrection. The narrative layer — delivered in the style of a 2000s visual novel, complete with chibi character portraits and dialogue that alternates between sharp and tedious — is optional in the sense that you can skip it, but the game nudges you toward it constantly. Those who engage will find more character work than the package suggests.",
      "The levels are the point. Each is a compact, designed space populated with enemies and traversal obstacles, measured in seconds. Your objective is to reach the exit as fast as possible. The means of traversal is a hand of cards, each drawn from enemy kills: a gun card might be discarded for a higher jump; a shotgun card might be discarded for a short dash forward; a rifle card might launch you upward. The levels are built around specific card combinations; finding them is the first stage of mastery.",
      "The medal system drives replay. Silver is achievable on a first run. Gold requires rerouting. Red requires understanding the level's theoretical optimum and executing it cleanly. Acing a level — beating a developer time that implies intimate knowledge of every frame — requires the kind of obsessive repetition that speedrunning communities usually develop over months, here compressed into two-minute levels designed specifically for it.",
      "The gift system, where leaving hidden presents scattered throughout levels unlocks story scenes and cosmetic rewards, gives casual players a reason to explore spaces that speedrunners would never deviate from. It is a smart way to layer the same content for different audiences without fragmenting the experience.",
      "The aesthetic is aggressively stylised and not to all tastes. The pink-and-gold Heaven palette and the anime character work signal an energy that is camp and deliberately excessive. The soundtrack, by Machine Girl, is hyperpop-adjacent noise that fits the frenetic pace exactly and will irritate anyone who prefers their game music atmospheric.",
      "The levels in the second half — particularly the Cathedral chapter — are genuinely brilliant: complex three-dimensional spaces that demand card resource management as well as movement skill, where the optimal route is not visible until the third or fourth attempt. This is game design operating at a high level, and it does not get enough credit for it.",
    ],
    pullQuote:
      'Finding the optimal card route is the first stage of mastery. Executing it cleanly under pressure is the second. The space between them is where the game lives.',
    verdict:
      'Past the anime aesthetic and the hyperactive presentation is a movement game of genuine invention. Neon White asks you to think spatially, act precisely, and accept that the level you just completed in forty seconds can be done in twenty-eight. A hidden essential.',
    scoreBreakdown: { gameplay: 9, visuals: 7, audio: 8, longevity: 8 },
    relatedSlugs: ['hollow-knight', 'hades-ii'],
  },

  'remnant-ii': {
    ...REVIEWS.find((r) => r.slug === 'remnant-ii')!,
    reviewer: 'Priya Holst',
    publishedDate: 'July 28, 2023',
    openingVerdict:
      "Remnant II is a Soulslike shooter, which remains a stranger genre hybrid than it sounds. Gunfire Games has taken the deliberate, positioned combat of FromSoftware's catalogue and crossed it with the loot systems and procedural world generation of looter-shooters, producing something that earns both halves of that description and is more than either on its own.",
    body: [
      "The world generation is the most ambitious element. Each playthrough generates a distinct version of its biomes — different boss encounters, different dungeons, different quest chains — from a pool of possible configurations. Two players can compare notes on their Yaesha experience and find that the critical path visits entirely different locations. This is procedural generation operating at a scale most games do not attempt, and for the first two playthroughs it is genuinely exciting.",
      "The archetype system — Remnant II's character build layer — gives the shooting a role-playing depth that the first game lacked. You choose a primary and secondary archetype from a growing roster: the Hunter, patient and precise; the Challenger, close-range and unkillable; the Summoner, managing a battlefield through minion resource management. Each archetype has a passive tree and a suite of unlockable skills that interact with weapons and modifiers in ways that encourage experimentation.",
      "The boss encounters are exceptional. Annihilation, the final boss, is among the best designed in recent memory: a multi-phase fight that demands mastery of everything the game has taught you, with a visual scale that justifies the journey. The Dreamers fights in Losomn — particularly the Nightweaver — hit a chord of dreamlike horror that the atmospheric design has been building toward from the first portal opening.",
      "The shooting itself is satisfying in the tactile sense that matters: weapons kick realistically, headshots register with weight, and the mod system — secondary fire effects attached to weapons and customisable through crafting — ensures that no two loadouts feel identical. The game rewards the player who experiments over the player who optimises one build and sticks to it.",
      "The co-op implementation is among the best in the genre. Three-player sessions are genuinely built for rather than bolted on: enemy health scales appropriately, aggro systems account for multiple targets, and the world seed shared between players ensures everyone is in the same experience. Playing with friends elevates the game considerably.",
      "The randomisation that is Remnant II's greatest strength is also the source of its most significant design problem. Because the world generates new configurations, some playthroughs will miss key content — rings, amulets, entire quest chains — that others encounter. The game acknowledges this with a rerolling mechanic, but the prospect of missed loot through no fault of your own is a genuine friction point for completionist players.",
    ],
    pullQuote:
      "The procedural generation operates at a scale most games don't attempt — and for the first two playthroughs, it is genuinely exciting.",
    verdict:
      'Remnant II is the best argument yet that the Soulslike formula can survive transplantation into a shooter chassis. Excellent archetype depth, outstanding boss design, and a co-op implementation that makes the whole game better. The procedural randomisation is occasionally frustrating, but rarely enough to derail what is, overall, an exceptional action game.',
    scoreBreakdown: { gameplay: 8, visuals: 8, audio: 7, longevity: 9 },
    relatedSlugs: ['elden-ring', 'hades-ii'],
  },
};

export function getReviewDetail(slug: string): ReviewDetail | undefined {
  return REVIEW_DETAILS[slug];
}

export function getRelatedReviews(slugs: string[]): Review[] {
  return slugs
    .map((slug) => ALL_REVIEWS.find((r) => r.slug === slug))
    .filter((r): r is Review => r !== undefined);
}
