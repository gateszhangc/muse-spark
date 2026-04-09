import Image from "next/image";
import {
  ArrowRight,
  Atom,
  BadgeCheck,
  Blend,
  Brain,
  Compass,
  GalleryHorizontal,
  ImagePlus,
  MessageCircle,
  Mic2,
  Orbit,
  PenTool,
  Radar,
  Sparkles,
  Stars,
  WandSparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Lab", href: "#lab" },
  { label: "Sparks", href: "#sparks" },
  { label: "Manifesto", href: "#manifesto" },
];

const capabilities = [
  {
    title: "Listen",
    icon: Mic2,
    eyebrow: "Voice + capture",
    copy:
      "Start with fragments, notes, or voice. Muse Spark listens for signal instead of forcing a perfect prompt.",
    stat: "12s to capture a usable spark",
  },
  {
    title: "Compose",
    icon: PenTool,
    eyebrow: "Structuring intelligence",
    copy:
      "Turn rough ideas into sequences, outlines, launch copy, and crisp editorial systems with guided scaffolding inside one prompt workspace.",
    stat: "4 creative modes for the same idea",
  },
  {
    title: "Remix",
    icon: Blend,
    eyebrow: "Visual + social output",
    copy:
      "Generate visuals, remix public prompt patterns, and push the result into decks, docs, or campaign assets with a creative assistant that stays on-brand.",
    stat: "Text, image, feed, export in one loop",
  },
];

const streamCards = [
  {
    title: "Brand launch narrative",
    tag: "Story architecture",
    mode: "Editorial mode",
    copy:
      "Shape a founder note into launch copy, homepage blocks, a 6-slide investor arc, and a short voiceover.",
  },
  {
    title: "Museum trip planner",
    tag: "Deep research",
    mode: "Discover remix",
    copy:
      "Blend research, itinerary logic, and image references into one portable guide that still feels designed.",
  },
  {
    title: "Campaign visual kit",
    tag: "Image system",
    mode: "Spark studio",
    copy:
      "Generate visual directions, motion cues, and social cutdowns from a single central narrative prompt.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Capture",
    description: "Voice notes, loose prompts, references, and fragments all enter the same working memory.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Shape",
    description: "Muse Spark identifies the angle, tone, structure, and missing context required to make it useful.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Generate",
    description: "Outputs become cards, documents, image prompts, and executable next actions instead of dead text.",
    icon: ImagePlus,
  },
  {
    step: "04",
    title: "Publish",
    description: "Reuse, remix, and ship the best sparks into feeds, launches, research notes, or visual campaigns.",
    icon: Workflow,
  },
];

const chips = [
  "launch a creative brief",
  "turn voice notes into a pitch",
  "remix prompts from the feed",
  "generate art direction",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pulse-glow absolute left-[6%] top-24 h-36 w-36 rounded-full bg-[#fb6b47]/18 blur-3xl" />
        <div className="drift absolute right-[8%] top-32 h-44 w-44 rounded-full bg-[#194e45]/16 blur-3xl" />
        <div className="rise absolute bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#f4ba4d]/18 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
        <header className="spark-panel sticky top-4 z-30 mb-8 rounded-full border border-white/60 px-4 py-3 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between gap-4">
            <a className="flex items-center gap-3" href="#top" aria-label="Muse Spark home">
              <Image
                src="/brand/muse-spark-mark.png"
                alt="Muse Spark mark"
                width={44}
                height={44}
                priority
                className="h-11 w-11 rounded-full"
              />
              <div className="hidden sm:block">
                <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#19161a]">
                  Muse Spark
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/58">
                  creative signal studio
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-[#19161a]/70 transition-colors hover:bg-white/80 hover:text-[#19161a]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#cta"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-[#19161a] px-4 text-[#fff8f1] hover:bg-[#19161a]/90"
              )}
            >
              Get beta
            </a>
          </div>
        </header>

        <section
          id="top"
          className="section-anchor grid items-start gap-8 pb-10 pt-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]"
        >
          <div className="relative">
            <Badge
              variant="outline"
              className="mb-5 rounded-full border-[#19161a]/10 bg-white/55 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[#19161a]/64"
            >
              Muse Spark AI studio for prompts, remixing, and creative direction
            </Badge>

            <div className="max-w-3xl">
              <Image
                src="/brand/muse-spark-logo.png"
                alt="Muse Spark logo"
                width={1100}
                height={320}
                priority
                className="mb-8 h-auto w-full max-w-[560px]"
              />

              <h1 className="font-heading text-balance max-w-4xl text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.96] font-semibold tracking-[-0.08em] text-[#19161a]">
                Where prompts become
                <span className="ml-2 inline-block text-[#fb6b47]">signals</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-[#19161a]/72 sm:text-xl">
                Muse Spark is an AI studio, prompt workspace, and creative assistant
                for capturing rough thoughts, shaping them into systems, and remixing
                them into launch-ready copy, visual direction, and social artifacts.
              </p>

              <p className="mt-4 max-w-2xl text-balance text-base leading-7 text-[#19161a]/62">
                Built for founders, marketers, and creative teams who want one place to
                prompt, remix, and publish without losing tone, context, or momentum.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lab"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-[#fb6b47] px-5 text-[#19161a] hover:bg-[#fb6b47]/90"
                  )}
                >
                  Start a spark
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#sparks"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full border-[#19161a]/12 bg-white/55 px-5 text-[#19161a] hover:bg-white"
                  )}
                >
                  See the feed
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <Badge
                    key={chip}
                    variant="secondary"
                    className="rounded-full border border-[#19161a]/8 bg-white/65 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#19161a]/70"
                  >
                    {chip}
                  </Badge>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["Prompt memory", "Voice, text, image context in one thread"],
                  ["Discover feed", "See strong prompts and remix them"],
                  ["Visual modes", "Style, mood, lighting, and export controls"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="spark-outline rounded-[1.6rem] bg-white/58 p-4"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/52">
                      {title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#19161a]/78">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="lab" className="section-anchor relative lg:pt-8">
            <div className="spark-panel relative overflow-hidden rounded-[2rem] border border-white/70 p-5 sm:p-6">
              <div className="absolute right-5 top-5 flex items-center gap-2">
                <span className="glow-dot size-2 rounded-full bg-[#fb6b47]" />
                <span className="size-2 rounded-full bg-[#194e45]/50" />
                <span className="size-2 rounded-full bg-[#f4ba4d]/70" />
              </div>

              <div className="paper-grid absolute inset-0 opacity-25" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#19161a]/58">
                      Live lab canvas
                    </p>
                    <h2 className="mt-3 max-w-md font-heading text-3xl leading-tight tracking-[-0.05em] text-[#19161a]">
                      A conversation board that thinks in voice, visuals, and reusable systems.
                    </h2>
                  </div>
                  <div className="hidden rounded-full bg-white/75 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#19161a]/56 sm:block">
                    muse mode
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[#19161a]/8 bg-white/76 p-3">
                  <label
                    htmlFor="hero-prompt"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#19161a]/50"
                  >
                    Prompt composer
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="hero-prompt"
                      aria-label="Prompt composer"
                      placeholder="Ask Muse Spark to turn a founder memo into launch copy, image direction, and a social thread..."
                      className="h-12 w-full rounded-full border border-[#19161a]/10 bg-[#fffdf9] px-5 text-sm text-[#19161a] outline-none transition focus:border-[#fb6b47]/40 focus:ring-4 focus:ring-[#fb6b47]/10"
                    />
                    <Button
                      size="lg"
                      className="h-12 rounded-full bg-[#19161a] px-5 text-[#fff8f1] hover:bg-[#19161a]/92"
                    >
                      Shape it
                      <WandSparkles className="size-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="spark-outline rounded-[1.6rem] bg-[#fffdf9] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex size-10 items-center justify-center rounded-full bg-[#fb6b47]/14 text-[#fb6b47]">
                          <Sparkles className="size-5" />
                        </div>
                        <div>
                          <p className="font-medium text-[#19161a]">Spark preview</p>
                          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#19161a]/50">
                            Context-aware response
                          </p>
                        </div>
                      </div>
                      <Badge className="rounded-full bg-[#194e45] px-2.5 py-1 text-[#f6f1ea]">
                        personalized
                      </Badge>
                    </div>

                    <div className="mt-4 space-y-3 text-sm leading-6 text-[#19161a]/72">
                      <p>
                        I mapped your founder memo into three outputs: a homepage
                        narrative, a warm investor update, and a visual direction
                        leaning editorial-tech with high-contrast type.
                      </p>
                      <div className="rounded-[1.4rem] border border-[#19161a]/8 bg-[#f5efe6] p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#19161a]/52">
                          Suggested outputs
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full bg-white px-3 py-1">
                            launch brief
                          </Badge>
                          <Badge variant="secondary" className="rounded-full bg-white px-3 py-1">
                            image prompt
                          </Badge>
                          <Badge variant="secondary" className="rounded-full bg-white px-3 py-1">
                            social thread
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="spark-outline rounded-[1.6rem] bg-[#19161a] p-4 text-[#fff8f1]">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#fff8f1]/58">
                        <Orbit className="size-4" />
                        signal layers
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          {
                            label: "Voice memory",
                            value: "keeps tone, intent, and context",
                          },
                          {
                            label: "Visual presets",
                            value: "mood, light, texture, composition",
                          },
                          {
                            label: "Remix logic",
                            value: "learn from feed cards without copy-paste fatigue",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-[1.2rem] border border-white/10 bg-white/6 p-3"
                          >
                            <p className="text-sm font-medium text-[#fff8f1]">{item.label}</p>
                            <p className="mt-1 text-sm leading-6 text-[#fff8f1]/64">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="spark-outline rounded-[1.6rem] bg-white/70 p-4">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/56">
                        <Stars className="size-4" />
                        discover cues
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          "best performing prompt",
                          "voice-first interaction",
                          "document export",
                          "creative feed remix",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#19161a]/10 px-3 py-2 text-sm text-[#19161a]/72"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-anchor py-10" id="manifesto">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/56">
                Capability stack
              </p>
              <h2 className="mt-3 font-heading text-4xl tracking-[-0.05em] text-[#19161a]">
                Built to move from signal to system.
              </h2>
            </div>
            <Badge
              variant="outline"
              className="hidden rounded-full border-[#19161a]/10 bg-white/55 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/58 md:inline-flex"
            >
              voice, web context, discover feed, visual remix
            </Badge>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={cn(
                    "spark-outline rounded-[1.8rem] p-6",
                    index === 1 ? "bg-[#19161a] text-[#fff8f1]" : "bg-white/68 text-[#19161a]"
                  )}
                >
                  <div
                    className={cn(
                      "flex size-12 items-center justify-center rounded-2xl",
                      index === 1 ? "bg-white/10 text-[#f4ba4d]" : "bg-[#19161a]/6 text-[#fb6b47]"
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <p
                    className={cn(
                      "mt-5 font-mono text-[11px] uppercase tracking-[0.22em]",
                      index === 1 ? "text-[#fff8f1]/56" : "text-[#19161a]/52"
                    )}
                  >
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl tracking-[-0.04em]">{item.title}</h3>
                  <p
                    className={cn(
                      "mt-4 text-sm leading-7",
                      index === 1 ? "text-[#fff8f1]/72" : "text-[#19161a]/72"
                    )}
                  >
                    {item.copy}
                  </p>
                  <Separator
                    className={cn(
                      "my-5",
                      index === 1 ? "bg-white/10" : "bg-[#19161a]/8"
                    )}
                  />
                  <p
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.22em]",
                      index === 1 ? "text-[#f4ba4d]" : "text-[#194e45]"
                    )}
                  >
                    {item.stat}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="sparks" className="section-anchor py-10">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="spark-outline rounded-[2rem] bg-[#19161a] p-6 text-[#fff8f1]">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#fff8f1]/58">
                Spark stream
              </p>
              <h2 className="mt-4 font-heading text-4xl tracking-[-0.05em]">
                Discover how other people turn prompts into systems.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#fff8f1]/72">
                The feed is not just inspiration. It is a reusable grammar for
                high-leverage prompting, complete with modes, outputs, and remix paths.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  { label: "Personalized threads", icon: Compass },
                  { label: "Creative memory", icon: Atom },
                  { label: "Export-ready outputs", icon: BadgeCheck },
                ].map((item) => {
                  const RenderIcon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/6 px-4 py-3"
                    >
                      <RenderIcon className="size-4 text-[#f4ba4d]" />
                      <span className="text-sm text-[#fff8f1]/74">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4">
              {streamCards.map((card, index) => (
                <article
                  key={card.title}
                  className={cn(
                    "spark-outline rounded-[1.8rem] p-5",
                    index === 1 ? "bg-[#fb6b47] text-[#19161a]" : "bg-white/68 text-[#19161a]"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      className={cn(
                        "rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]",
                        index === 1
                          ? "bg-[#19161a] text-[#fff8f1]"
                          : "bg-[#19161a]/8 text-[#19161a]"
                      )}
                    >
                      {card.tag}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-full border-current/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em]",
                        index === 1 ? "bg-white/18 text-[#19161a]" : "bg-white/74 text-[#19161a]/62"
                      )}
                    >
                      {card.mode}
                    </Badge>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-3xl tracking-[-0.04em]">{card.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-current/76">{card.copy}</p>
                    </div>
                    <div className="hidden rounded-full border border-current/12 p-3 lg:block">
                      {index === 0 ? (
                        <GalleryHorizontal className="size-5" />
                      ) : index === 1 ? (
                        <Radar className="size-5" />
                      ) : (
                        <ImagePlus className="size-5" />
                      )}
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-current/10 pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-current/54">
                      remix available
                    </p>
                    <a
                      href="#cta"
                      className="inline-flex items-center gap-2 text-sm font-medium text-current"
                    >
                      Use this spark
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-anchor py-10">
          <div className="spark-panel rounded-[2.2rem] border border-white/70 p-6 sm:p-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/56">
                  Workflow rail
                </p>
                <h2 className="mt-3 font-heading text-4xl tracking-[-0.05em] text-[#19161a]">
                  Capture → shape → generate → publish.
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-[#19161a]/68">
                The system stays useful because it keeps the loop intact: inputs stay alive,
                outputs stay reusable, and the feed keeps teaching better patterns over time.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.step}
                    className={cn(
                      "relative rounded-[1.8rem] p-5",
                      index % 2 === 0 ? "bg-[#fffdf9]" : "bg-[#ede3d5]"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Badge
                        variant="outline"
                        className="rounded-full border-[#19161a]/10 bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#19161a]/56"
                      >
                        step {item.step}
                      </Badge>
                      <Icon className="size-5 text-[#fb6b47]" />
                    </div>
                    <h3 className="mt-6 font-heading text-3xl tracking-[-0.04em] text-[#19161a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#19161a]/72">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cta" className="section-anchor py-10">
          <div className="grid gap-5 rounded-[2.2rem] bg-[#19161a] p-6 text-[#fff8f1] sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#fff8f1]/58">
                Join the beta
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.06em]">
                Build with a studio, not just a chat box.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#fff8f1]/72">
                Muse Spark brings together voice-first prompting, feed-based remix,
                image direction, and export-ready outputs in one deliberate interface.
              </p>
            </div>

            <div className="grid gap-4 rounded-[1.8rem] bg-white/6 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Spark capture", "Voice, text, fragments"],
                  ["Social remix", "Learn from prompt patterns"],
                  ["Creative export", "Decks, docs, images"],
                  ["Designed UI", "Editorial, fast, memorable"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-[1.3rem] border border-white/10 bg-white/4 p-4"
                  >
                    <p className="font-medium text-[#fff8f1]">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#fff8f1]/62">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-[#f4ba4d] px-5 text-[#19161a] hover:bg-[#f4ba4d]/92"
                >
                  Request access
                  <ArrowRight className="size-4" />
                </Button>
                <a
                  href="#top"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-white/12 bg-white/4 px-5 text-[#fff8f1] hover:bg-white/8 hover:text-[#fff8f1]"
                  )}
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#19161a]/8 py-6 text-sm text-[#19161a]/58 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed for creative systems, not disposable prompts.</p>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span>muse spark</span>
            <span className="text-[#fb6b47]">/</span>
            <span>signal studio</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
