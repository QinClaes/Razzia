import GithubIcon from "@razzia/web/components/GithubIcon"
import type { PropsWithChildren } from "react"

const Background = ({ children }: PropsWithChildren) => (
  <section className="relative flex min-h-dvh flex-col items-center justify-center">
    <div className="absolute h-full max-h-svh w-full overflow-hidden">
      <div className="bg-primary/15 absolute top-[-70vmin] left-[-50vmin] min-h-[120vmin] min-w-[120vmin] rotate-20 rounded-4xl" />
      <div className="bg-primary/15 absolute right-[-10vmin] bottom-[-45vmin] min-h-[75vmin] min-w-[75vmin] rotate-20 rounded-4xl" />
    </div>

    <div className="mb-10 flex flex-col items-center gap-3">
      <img src="/icon-bee.png" className="size-16" alt="BlueHoot bee" />
      <h1 className="font-display text-6xl font-bold tracking-tight text-[#0f62fe]">
        BlueHoot
      </h1>
    </div>
    {children}

    <a
      href="https://github.com/Ralex91/Razzia"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 text-sm font-semibold text-white/50 transition-colors hover:text-white/80"
    >
      <GithubIcon size={14} />
      {/* oxlint-disable-next-line no-undef */}
      Razzia - v{__APP_VERSION__}
    </a>
  </section>
)

export default Background
