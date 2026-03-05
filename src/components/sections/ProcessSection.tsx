import { ArrowRight, CheckCircle2, Rocket, Settings, Code2, Globe } from "lucide-react";

const ProcessSection = () => {
    return (
        <section id="process" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="font-sans text-4xl md:text-5xl font-medium text-white tracking-tight flex items-center gap-4">
                        Our process <span className="text-primary text-xl">✨</span>
                    </h2>
                </div>

                {/* Bento Grid layout for Process */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,_auto)]">

                    {/* Card 1: Subscribe */}
                    <div className="glass-panel p-8 flex flex-col justify-between col-span-1 md:col-span-3 xl:col-span-3 hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-center flex-1">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 self-center">
                                <div className="w-12 h-6 bg-primary rounded-full relative">
                                    <div className="absolute right-1 top-1 bottom-1 w-4 bg-white rounded-full"></div>
                                </div>
                                <span className="text-white/60 text-sm font-medium">Subscription</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">01. Subscribe</h3>
                            <p className="text-white/60 text-sm">
                                Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Request */}
                    <div className="glass-panel p-8 flex flex-col justify-between col-span-1 md:col-span-3 xl:col-span-4 hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex-1 flex items-center justify-center pointer-events-none">
                            <div className="grid grid-cols-4 gap-4 opacity-70">
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white/50" /></div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">02. Request</h3>
                            <p className="text-white/60 text-sm">
                                Start requesting the software applications and digital solutions you need. Our developers are right there to transform your ideas into reality.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Build */}
                    <div className="glass-panel p-8 flex flex-col justify-between col-span-1 md:col-span-6 xl:col-span-5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                            <Code2 className="w-32 h-32 text-primary" />
                        </div>
                        <div className="font-mono text-xs text-primary/70 mb-8 z-10">
                            <pre>
                                {`FeatureSection() from 'components';
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* developing... */}
    </div>
  )
}`}
                            </pre>
                        </div>
                        <div className="z-10 relative">
                            <h3 className="text-xl font-medium text-white mb-2">03. Build</h3>
                            <p className="text-white/60 text-sm max-w-sm">
                                Our developers swiftly begin building your custom solutions, prioritizing speed without compromising on quality.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Test & optimise */}
                    <div className="glass-panel p-8 flex flex-col justify-between col-span-1 md:col-span-6 xl:col-span-5 hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex-1 flex flex-col justify-center space-y-4 max-w-[80%]">
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-white/50"><span>Speed</span></div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-[85%] rounded-full shadow-glow"></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-white/50"><span>Security</span></div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-[95%] rounded-full shadow-glow"></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-white/50"><span>Accuracy</span></div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary/50 to-primary w-[90%] rounded-full shadow-glow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-medium text-white mb-2">04. Test & optimise</h3>
                            <p className="text-white/60 text-sm">
                                You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Become an industry leader */}
                    <div className="glass-panel p-8 flex flex-col justify-between col-span-1 md:col-span-6 xl:col-span-7 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
                        {/* Abstract Planet/Globe graphic */}
                        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full border border-primary/20 translate-x-1/3 translate-y-1/3 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
                            <Globe className="w-64 h-64 text-primary/30 animate-[spin_60s_linear_infinite]" />
                        </div>

                        <div className="relative z-10 mt-auto pt-32">
                            <h3 className="text-xl font-medium text-white mb-2">05. Become an industry leader</h3>
                            <p className="text-white/60 text-sm max-w-lg">
                                Continue requesting as many software applications as you wish, and transform your organisation into a worldwide industry leader.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
