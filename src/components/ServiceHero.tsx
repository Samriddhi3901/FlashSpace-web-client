type ServiceHeroProps = {
  title: string;
  subtitle?: string;
  description: string;
  videoSrc?: string;
};

const ServiceHero = ({ title, subtitle, description, videoSrc }: ServiceHeroProps) => {
  return (
    <section className="w-full bg-gradient-to-br from-background via-card-hover to-background">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover aspect-video md:aspect-[16/9]"
              />
            ) : (
              <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
            )}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-black/10" />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {title}
              {subtitle ? (
                <>
                  <br />
                  <span className="gradient-text-accent">{subtitle}</span>
                </>
              ) : null}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;



