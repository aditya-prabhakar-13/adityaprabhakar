export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  githubLinks?: { label: string; url: string }[];
  liveUrl: string;
  codeSnippet: string;
  terminalOutput: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Velora | Corporate Mobility Optimization Engine",
    description: "A high-performance C++ optimization engine solving the Capacitated Vehicle Routing Problem with Time Windows (CVRPTW).",
    longDescription: "Engineered a deterministic three-stage optimization pipeline using Solomon I1 heuristics and Adaptive Large Neighborhood Search (ALNS). Features a Django REST API, a React-based Operations Control Center with Leaflet.js maps, and a Capacitor mobile app. Delivered 57%–79% operational cost savings.",
    techStack: ["C++", "Python", "Django", "React", "Node.js", "Capacitor", "Leaflet.js", "OSRM"],
    githubUrl: "https://github.com/adumpster/Vehicle_router",
    githubLinks: [
      { label: "Backend Code", url: "https://github.com/aditya-prabhakar-13/Opti26_Backend" },
      { label: "Engine Code", url: "https://github.com/adumpster/Vehicle_router" }
    ],
    liveUrl: "https://opti26-velora.vercel.app/",
    codeSnippet: `// Solomon I1 Insertion Heuristic (C++)
Route buildInitialRoute(const Customer& seed, const std::vector<Customer>& unrouted) {
    Route route;
    route.append(seed);

    while (!unrouted.empty()) {
        auto [best, pos] = findBestInsertion(route, unrouted);
        if (best == nullptr || violatesConstraints(route, best, pos))
            break;
        route.insertAt(pos, *best);
    }
    return route;
}`,
    terminalOutput: `$ ./velora --solve --fleet=12 --depot=HQ
> [ALNS] Stage 1: Constructing initial solution...
> [I1]   Routes built: 12 | Customers routed: 148
> [ALNS] Stage 2: Large Neighborhood Search (iter: 5000)
> [ALNS] Improved: 57.3% cost reduction after 1,240 iters
> [ALNS] Stage 3: Local optimization complete
> Solution: 79.1% below benchmark | Time: 2.3s ✓`
  },
  {
    id: 2,
    title: "Vogue Nation Portal",
    description: "Full-stack event registration platform for Alcheringa 2026 handling secure authentication for 35+ teams.",
    longDescription: "A responsive team management portal built with Django and SQLite. Features Google OAuth 2.0 authentication, dynamic team creation workflows using Django Formsets, and a high-performance UI styled with Tailwind CSS and GSAP. Deployed using Gunicorn and Whitenoise.",
    techStack: ["Django", "Python", "SQLite", "Google OAuth", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/aditya-prabhakar-13/Vogue_26", // Update if you have the specific repo link
    liveUrl: "https://voguenation.alcheringa.co.in/", // Update with actual URL
    codeSnippet: `@receiver(post_save, sender=Team)
  def validate_team_composition(sender, instance, created, **kwargs):
      """
      Signal to validate team limits and auto-assign
      unique IDs upon creation.
      """
      if created:
          instance.team_id = generate_unique_id()
          instance.save()
      
      # Check max participants (e.g., 4 per team)
      if instance.members.count() > 4:
          raise ValidationError("Team limit exceeded")`,
      terminalOutput: `$ gunicorn core.wsgi:application
  [2025-10-15 14:23:01] [INFO] Starting gunicorn 23.0.0
  [2025-10-15 14:23:01] [INFO] Listening at: http://0.0.0.0:8000
  > Running migrations... OK
  > Collecting static files (Whitenoise)... Done
  > Google OAuth 2.0 initialized
  > Ready for connections`
  },
  {
    id: 3, // You can change this ID to place it where you want in the list
    title: "UDGAM 2026",
    description: "Official website for Northeast India's largest Entrepreneurial Summit at IIT Guwahati.",
    longDescription: "Built and deployed the official platform for Udgam 2026. Features a high-performance responsive design, immersive animations, and optimized asset delivery. Hosted on Vercel with custom domain management via GoDaddy.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "GoDaddy"],
    githubUrl: "https://github.com/aditya-prabhakar-13/UDGAM26",
    liveUrl: "https://www.udgamiitg.com/",
    codeSnippet: `const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="text-6xl font-bold gradient-text">
          UDGAM 2026
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Inspiring Innovation, Igniting Minds
        </p>
      </motion.div>
      <BackgroundParticles />
    </section>
  );
}`,
    terminalOutput: `$ vercel --prod
> Vercel CLI 32.5.0
> Inspecting project...
> Building production bundle...
> ✓ Static pages generated
> ✓ Route manifests created
> ✓ Edge functions optimized
> Deploying to https://www.udgamiitg.com
> Deployment complete! [1.2s]`
  },
  {
    id: 4,
    title: "YoManas CF Tracker",
    description: "A real-time competitive programming dashboard tracking CodeForces statistics, ratings, and contest schedules for elite cohorts.",
    longDescription: "Developed a robust tracking system that fetches and merges data from multiple CodeForces API endpoints. Features include automated leaderboard generation (recent vs. all-time solves), upcoming contest countdowns, and specialized user profiling with dynamic rating-based styling. Implemented a sophisticated multi-strategy proxy system (Vercel Proxy, CorsProxy, and CodeTabs) to bypass CORS limitations and ensure 99.9% uptime for data fetching.",
    techStack: ["React", "Vite", "Tailwind CSS", "Lucide React", "CodeForces API", "Vercel"],
    githubUrl: "https://github.com/aditya-prabhakar-13/YoManasCFTracker",
    liveUrl: "https://yo-manas-cf-tracker.vercel.app/",
    codeSnippet: `const fetchCF = async (endpoint, params = {}, retries = 3) => {
  const strategies = [
    { name: 'Vercel Proxy', url: () => \`/api/cf/\${endpoint}?\${queryString}\` },
    { name: 'CorsProxy', url: () => \`https://corsproxy.io/?\${encodeURIComponent(target)}\` }
  ];
  // Robust failover logic to ensure data availability
  for (const strategy of strategies) {
    try {
      const response = await fetch(strategy.url());
      if (response.ok) return (await response.json()).result;
    } catch (err) { continue; }
  }
};`,
    terminalOutput: `$ npm run dev
> codeforces-dashboard@0.0.0 dev
> vite
  VITE v7.2.4  ready in 124 ms
  ➜  Local:   http://localhost:5173/
  > Syncing Leaderboard... OK
  > CodeForces API Connection: STABLE`
  },
//   {
//     id: 4,
//     title: "SecureVault",
//     description: "End-to-end encrypted password manager with zero-knowledge architecture.",
//     longDescription: "Security-first password manager using AES-256 encryption with client-side key derivation.",
//     techStack: ["Go", "React Native", "SQLite", "Crypto"],
//     githubUrl: "https://github.com",
//     liveUrl: "https://demo.example.com",
//     codeSnippet: `func EncryptVault(data []byte, key []byte) ([]byte, error) {
//     block, err := aes.NewCipher(key)
//     if err != nil {
//         return nil, err
//     }
    
//     gcm, _ := cipher.NewGCM(block)
//     nonce := make([]byte, gcm.NonceSize())
//     io.ReadFull(rand.Reader, nonce)
    
//     return gcm.Seal(nonce, nonce, data, nil), nil
// }`,
//     terminalOutput: `$ vault status
// > Vault: LOCKED 🔒
// > Entries: 127 encrypted
// > Last sync: 2 hours ago
// > Security audit: PASSED
// > Zero breaches detected`
//   }
];
