import BlogSection from "@/components/blog-section";
import BlurFade from "@/components/magicui/blur-fade";
import NewsletterSubscribe from "@/components/subscribe";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main>
      <section id="hackathons">
        <div className="space-y-12 w-full pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 1}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Timeline Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Coming Soon! Here you&apos;ll find technical details of some of the latest papers in speech representation learning, ML inference and more!
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <NewsletterSubscribe />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <BlogSection />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
