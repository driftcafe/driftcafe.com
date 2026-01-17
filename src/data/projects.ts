export interface Project {
    slug: string;
    title: string;
    description: string;
    category: string;
    company: string;
    timeline: string;
    role: string;
    team: string;
    outcome: string;
    image?: string;
    content?: string;
}

export const projects: Project[] = [
    {
        slug: "building-with-claude",
        title: "Building with Claude",
        description: "An experimental design-to-code pipeline using Claude’s API.",
        category: "Prototype Exploration",
        company: "Personal",
        timeline: "1 week",
        role: "Design Technologist",
        team: "Solo",
        outcome: "Validated Pipeline",
        image: "/mcp-hero.png",
        content: `
            <h3>The Vision: Closing the Design-to-Code Loop</h3>
            <p>In the transition from deterministic to probabilistic UI, static mockups in Figma fail to capture the “feel” of an AI’s latency, reasoning, or uncertainty. I wanted to build a unified prototyping pipeline using Claude’s Model Context Protocol (MCP) that would:</p>
            <ul>
                <li><strong>Sync with my Figma library</strong> – Pull live components into a functional environment</li>
                <li><strong>Enable high-fidelity testing</strong> – Test real tool calls and agentic responses in minutes, not days</li>
            </ul>
            <p>The hypothesis: If I could connect Figma → MCP → Claude → Cursor, I could prototype AI interactions faster than our current Figma → engineer handoff cycle.</p>
            
            <figure style="margin: 2rem 0;">
                <img src="/mcp-pipeline.png" alt="Figma to Code Pipeline Diagram" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The MCP pipeline architecture—from Figma design system to functional React prototype in ~30 minutes.</figcaption>
            </figure>

            <h3>What I Built</h3>
            <p>The Flow:</p>
            <ol>
                <li><strong>Figma Design System</strong> → Components with MCP-compatible naming conventions</li>
                <li><strong>MCP Server</strong> → Reads Figma via API, exposes metadata to Claude</li>
                <li><strong>Claude (via Cursor)</strong> → Generates TypeScript React using shadcn/ui</li>
                <li><strong>Local Development</strong> → Functional prototype with real API calls</li>
            </ol>
            <p>What Actually Worked (For Me):</p>
            <ul>
                <li>Spin up working prototypes in 30 minutes vs. 2 days</li>
                <li>Components stayed consistent with design system</li>
                <li>Could test real AI behaviors (streaming, latency) immediately</li>
                <li>Fast iteration – ask Claude to modify, see results instantly</li>
            </ul>
            <p>The magic moment: “Create a chat interface with streaming responses” → working code that matched our design system.</p>

            <figure style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 3rem 0; width: 100%; max-width: 100%;">
                <figure style="margin: 0;">
                    <img src="/mcp-figma.png" alt="Figma Design System" style="width: 100%; height: auto; border-radius: 8px;" />
                    <figcaption style="font-size: 0.9rem; color: var(--muted); margin-top: 0.75rem;">Figma design library using shadcn/ui component naming conventions for MCP compatibility</figcaption>
                </figure>
                <figure style="margin: 0;">
                    <img src="/mcp-code.png" alt="Claude Desktop Code Generation" style="width: 100%; height: auto; border-radius: 8px;" />
                    <figcaption style="font-size: 0.9rem; color: var(--muted); margin-top: 0.75rem;">Claude Desktop (MCP) reading Figma component metadata to generate matching React code</figcaption>
                </figure>
            </figure>

            <h3>The Hard Truth: Two Major Roadblocks</h3>
            <h4>1. The Scaling & Setup “Tax”</h4>
            <p><span style="font-weight: 600;">The Problem:</span> The pipeline required specific local environment configuration. To use it, teammates needed to install MCP SDK, manage API keys, and be comfortable with terminal commands.</p>
            <p><span style="font-weight: 600;">The Realization:</span> I built a “bespoke cockpit” for myself, not a “utility” for the team.</p>
            <p><span style="font-weight: 600;">The Insight:</span> For design tools to succeed in enterprise environments, they must be browser-first and zero-config. Setup friction killed adoption.</p>

            <h4>2. The “One-Way Street” Limitation</h4>
            <p><span style="font-weight: 600;">The Problem:</span> Sync was unidirectional – I could pull from Figma but couldn’t push changes back.</p>
            <p><span style="font-weight: 600;">The Technical Gap:</span> MCP can read context brilliantly, but writing back to design tools isn’t part of the paradigm yet. AI-assisted design should enable bidirectional learning.</p>

            <figure style="margin: 3rem 0; width: 50%; max-width: 50%;">
                <img src="/mcp-sync-problem.png" alt="One-way sync problem diagram" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: left; margin-top: 0.75rem;">The one-way sync problem—MCP can read from Figma but can’t write design changes back</figcaption>
            </figure>

            <h3>What I Learned About AI-Powered Workflows</h3>
            <ol>
                <li><strong>LLMs Lower Barriers, But Don’t Remove Them.</strong> Claude made generating code incredibly easy. But the gap between “working for me” and “working for the team” remained enormous.</li>
                <li><strong>AI Tools Are “Agreeable” – Sometimes Too Agreeable.</strong> Claude never pushed back on my assumptions. You still need critical thinking – AI amplifies your direction, good or bad.</li>
                <li><strong>The Best AI Tools Solve Clear, Specific Problems.</strong> The most successful moments came from clear, bounded problems. The failure was trying to solve a vague, systemic issue.</li>
                <li><strong>Hands-On Building Reveals Hidden Truths.</strong> No planning would have revealed the setup tax or one-way sync limitation. Even “failed” prototypes teach what won’t work.</li>
            </ol>

            <h3>Reflection: Technical Feasibility vs. Product Viability</h3>
            <p>This project taught me the difference between building something that works and building something that scales.</p>
            <p>As a designer who prototypes with code, it’s easy to fall in love with technical elegance. But my job isn’t building the most advanced pipeline – it’s building tools that empower the team to move faster together.</p>
            <p>My evaluation criteria now: “Can my least technical teammate use this without my help?” If not, it’s not ready.</p>
        `
    },
    {
        slug: "hila",
        title: "Hila",
        description: "Conversational AI for enterprise financial analysis.",
        category: "Product Design",
        company: "Vianai Systems",
        timeline: "4 months",
        role: "Lead Designer",
        team: "Founding Team (5)",
        outcome: "$1M ARR",
        image: "/hila-hero.png",
        content: `
            <h3>The Challenge</h3>
            <p><strong>“Hallucinations Cost Millions”</strong></p>
            <p>In finance, a wrong number isn’t just a bug; it’s a liability. The fundamental roadblock was that standard LLMs (like ChatGPT) are prone to “hallucinations.” Our target users—financial analysts—needed absolute certainty, not just conversational fluency. We had to design an interface that prioritized verification over magic.</p>

            <h3>The Solution</h3>
            <p>Trust through transparency. We moved away from the “black box” chat interface to a system that explicitly “shows its work.”</p>
            
            <h4>1. Calculation Transparency (Visualizing the Logic)</h4>
            <ul>
                <li><strong>Concept:</strong> Analysts don’t trust a summary without seeing the math.</li>
                <li><strong>Execution:</strong> We designed interactive data tables that bridge the gap between natural language summaries and raw enterprise data. Users can toggle between narrative, data grids, and visual charts to cross-reference every claim.</li>
            </ul>

            <figure style="margin: 3rem 0;">
                <img src="/hila-table.png" alt="Hila Transparent Data Table Interface" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Breaking the Black Box: The interface generates structured tables to prove the math behind every insight, allowing users to audit the AI’s logic.</figcaption>
            </figure>

            <h4>2. Direct Source Attribution</h4>
            <ul>
                <li><strong>Concept:</strong> “Calculated Trust.” Different users need different levels of proof.</li>
                <li><strong>Execution:</strong> We implemented a multi-layered verification system.
                    <ul>
                        <li><strong>The Reasoning Tab:</strong> Reveals the specific arithmetic (e.g., CAGR formulas).</li>
                        <li><strong>Side-by-Side View:</strong> Clicking a data point opens the original source PDF with the exact relevant section highlighted.</li>
                    </ul>
                </li>
            </ul>
            <figure style="margin: 3rem 0;">
                <img src="/hila-debug.gif" alt="Hila Side-by-Side Source Verification" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Trust but Verify: A side-by-side view instantly connects the AI’s answer to the source document, highlighting the exact paragraph used.</figcaption>
            </figure>

            <h4>3. The “Streaming Thought” UI</h4>
            <ul>
                <li><strong>Concept:</strong> Complex financial analysis takes time (5-10s), causing user anxiety (“Did it crash?”).</li>
                <li><strong>Execution:</strong> Instead of a static spinner, we exposed the AI’s “thinking process” in real-time steps (e.g., “Searching 10-K…” → “Extracting Revenue…”). This managed wait time and built a mental model of competence.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 60%; max-width: 60%;">
                <img src="/hila-stepcard.png" alt="Hila Streaming Thought Interface" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: left; margin-top: 0.75rem;">Managing Uncertainty: The “Streaming Thought” card keeps the user informed during long processing times, reducing abandonment.</figcaption>
            </figure>

            <h3>Beyond Financials: The Probabilistic Shift</h3>
            <p>My work on hila (and previously on Kinect) has centered on the same fundamental shift in computing: The move from <strong>deterministic</strong> to <strong>probabilistic</strong> interfaces.</p>
            <ul>
                <li><strong>Deterministic (Traditional):</strong> You click a button; a specific action happens.</li>
                <li><strong>Probabilistic (AI/Gesture):</strong> The system “guesses” your intent based on noisy input or ambiguous prompts.</li>
            </ul>
            <p><strong>My Strategy for the AI Era:</strong></p>
            <ul>
                <li><strong>Smooth the Jitter:</strong> Don’t show the user the raw machine uncertainty; provide a filtered, confident UI.</li>
                <li><strong>Affordances Matter:</strong> Empty chat boxes cause “Blank Canvas Anxiety.” Always provide a “hand to hold” through suggestions and visible constraints.</li>
                <li><strong>Reliability > Magic:</strong> A feature that is “cool” but fails 20% of the time is a liability. I design for the 99% use case.</li>
            </ul>

            <h3>The Results</h3>
            <p>The “accuracy over impressiveness” approach validated the product immediately, turning an experiment into a revenue driver.</p>
            <ul>
                <li><strong>Growth:</strong> 0 to 4,000 users in 4 months.</li>
                <li><strong>Revenue:</strong> Reached $1M ARR in 4 months.</li>
                <li><strong>Scale:</strong> Design team grew from 2 to 4; engineering team scaled from 5 to 50.</li>
            </ul>

            <h3>User Testimonials</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 1.5rem;">
                <blockquote style="border-left: 2px solid var(--foreground); padding-left: 1rem; margin: 0;">
                    <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 0.5rem;">“Connect it to your data sources (no need to build a data lakehouse) and it’ll just start answering your questions. After a few thumbs up/down and real-time reinforcement learning it’ll get it right. Almost magic.”</p>
                    <cite style="font-size: 0.9rem; color: var(--muted); display: block; font-style: normal;">— Boris Evelson, VP at Forrester Research</cite>
                </blockquote>
                <blockquote style="border-left: 2px solid var(--foreground); padding-left: 1rem; margin: 0;">
                    <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 0.5rem;">“hila vastly improves my research process. I can rapidly search 10-Ks and earnings calls to find if anything related to my theses are hidden inside… More importantly, I can do it quickly without wasting time skimming irrelevant topics or pinpointing key words.”</p>
                    <cite style="font-size: 0.9rem; color: var(--muted); display: block; font-style: normal;">— Mike Ostroff, Investment Analyst at Maverick Capital</cite>
                </blockquote>
                <blockquote style="border-left: 2px solid var(--foreground); padding-left: 1rem; margin: 0;">
                    <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 0.5rem;">“Being able to monitor and improve LLM performance is critical to unlocking the true power of gen AI. Vianai’s hila Enterprise provides clients a platform to safely and reliably deploy any large language model (LLM), optimized and fine-tuned to speak to their systems of record.”</p>
                    <cite style="font-size: 0.9rem; color: var(--muted); display: block; font-style: normal;">— Ravi Kumar S, CEO of Cognizant</cite>
                </blockquote>
                <blockquote style="border-left: 2px solid var(--foreground); padding-left: 1rem; margin: 0;">
                    <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 0.5rem;">“Vianai is helping customers innovate by bringing its hila agents to Google Cloud. Leveraging the power of Gemini models, these solutions allow businesses to easily deploy sophisticated analytics without technical expertise, unlocking value from their data faster and more effectively.”</p>
                    <cite style="font-size: 0.9rem; color: var(--muted); display: block; font-style: normal;">— Kevin Ichhpurani, Corporate VP at Google Cloud</cite>
                </blockquote>
            </div>

            <h3>Reflection</h3>
            <p>hila taught me that the best AI products feel effortless not because the AI is sophisticated, but because the design earns user trust.</p>
            <p>We succeeded by making the most interpretable AI on the market. Every design decision—from source highlights to honest uncertainty to streaming thought processes—served the goal of making a powerful, unpredictable technology feel reliable and controllable.</p>
        `
    },
    {
        title: "Kinect for Windows",
        description: "Foundational interaction patterns for Microsoft’s gesture platform.",
        category: "Interaction Design",
        company: "Microsoft",
        timeline: "1 Year",
        slug: "kinect",
        role: "Interaction Designer",
        team: "PM, Eng, Research",
        outcome: "Shipped SDK 1.7",
        image: "/kinect-hero.webp",
        content: `
            <h3>The Challenge: Designing Without a Map</h3>
            <p>In 2012, Kinect for Windows introduced a paradigm shift: a depth-sensing camera that turned the human body into an input device.</p>
            <p>Traditional UI relies on centuries of accumulated conventions—we know how a mouse clicks and how a keyboard types. Kinect threw all of that out. There was no tactile feedback, no physical surface, and no “zero state.” Just a user, standing in empty space, expecting the computer to understand them.</p>
            <p><strong>My challenge:</strong> Create the foundational “grammar” of motion for a system that had no rules.</p>

            <figure style="margin: 3rem 0; width: 60%; max-width: 60%;">
                <img src="/kinect-noise.png" alt="Kinect Skeleton Noise Visualization" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: left; margin-top: 0.75rem;">The raw input challenge. Visualizing the “noise” of raw skeletal data (Red) vs. the smoothed interpretation (Green) required to determine intent.</figcaption>
            </figure>

            <h3>The Prototyping Strategy</h3>
            <p>We moved away from designing full applications and focused on atomic interactions. We established a culture of “Hallway Testing”—building a prototype in the morning, testing it with passersby in the afternoon, and refining the code by evening.</p>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/kinect-halltest.png" alt="Kinect Hallway Testing" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Rapid Iteration. We ran daily “hallway tests” with paper prototypes and raw builds to determine the baseline constraints for human movement.</figcaption>
            </figure>

            <h3>The Pivot: Why "Natural" Failed</h3>
            <p>We initially assumed that “Natural User Interface” meant mimicking real life. Our first hypothesis for selecting a button was “Hover-to-Click” (holding your hand still over a button for 2 seconds).</p>
            <p>It failed.</p>
            <ul>
                <li><strong>The “Penalty Box” Effect:</strong> Users reported feeling like they were being punished. They had to freeze their bodies perfectly still, which is physically difficult and mentally stressful.</li>
                <li><strong>The “Midas Touch”:</strong> Users would accidentally trigger buttons just by looking at them or moving past them.</li>
            </ul>
            <p>We realized that for a gesture interface to feel “natural,” it actually needed artificial friction. This insight drove us to scrap the “Hover” model and invent the “Push” metaphor.</p>

            <h3>Core Interaction Patterns</h3>
            <p>To bridge the gap between human intent and machine sensing, we developed three flagship patterns.</p>
            
            <h4>1. Selection: The “Elastic” Press</h4>
            <ul>
                <li><strong>The Problem:</strong> Without a physical mouse, users lacked the precision to “click” small targets. Hand jitter made standard cursors feel broken.</li>
                <li><strong>The Solution:</strong> We designed a “Physical Interaction Zone” (Phiz) model using a “Magnetic” cursor that snapped to targets. But magnetics weren’t enough—we also had to redefine the button itself.</li>
                <li><strong>The Data:</strong> Testing for the “Safety Factor”. We ran extensive sizing tests to determine the “Minimum Viable Target.” While large targets performed well, smaller targets (around 100px) had an unacceptable failure rate of 19%. Rather than shipping the bare minimum size that “passed” the test, we established a Safety Factor. We took the raw success data and padded the dimensions to create a standardized grid that could absorb environmental noise (lighting, distance) and user error.</li>
            </ul>

            <h4>Interaction Grid Definition</h4>
            <table>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Tested (Success %)</th>
                        <th>Shipped</th>
                        <th>Design Decision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Secondary</td>
                        <td>107 x 107 px (81%)</td>
                        <td>220 x 220 px</td>
                        <td>Failed. Size doubled to ensure hit-ability.</td>
                    </tr>
                    <tr>
                        <td>Content</td>
                        <td>214 x 180 px (88%)</td>
                        <td>330 x 330 px</td>
                        <td>Borderline. Increased to buffer skeletal jitter.</td>
                    </tr>
                    <tr>
                        <td>Hero/Nav</td>
                        <td>363 x 283 px (97%)</td>
                        <td>440 x 440 px</td>
                        <td>Validated. Rounded up to align with grid system.</td>
                    </tr>
                </tbody>
            </table>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/kinect-cursor.png" alt="Kinect Elastic Press Visualization" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The Reliability Equation. We combined the expanded target dimensions (Safety Factor) with the “Elastic Press” mechanic (visualized here), creating a system that absorbed both lateral jitter and depth noise.</figcaption>
            </figure>

            <h4>2. Manipulation: Grip-to-Pan</h4>
            <ul>
                <li><strong>The Problem:</strong> “Gorilla Arm.” Users physically cannot hold their arms up long enough to scroll through long lists using standard scrollbars.</li>
                <li><strong>The Solution:</strong> We changed the mental model from “operating a scrollbar” to “Direct Manipulation.”
                    <ul>
                        <li><strong>The Clutch:</strong> We used the “Open Hand” vs. “Closed Fist” state to engage the physics engine.</li>
                        <li><strong>Inertia:</strong> We allowed users to “throw” content. A small flick of the wrist sent the list coasting, saving physical energy.</li>
                        <li><strong>The Ratchet:</strong> We optimized the sensor to recognize the release instantly, allowing users to grab, pull, and release repeatedly—like pulling a rope—to navigate infinite lists without extending their reach.</li>
                    </ul>
                </li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/kinect-clutch.png" alt="Kinect Clutch State Visualization" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The “Clutch” states. Visual feedback was critical: The cursor morphed from an Open Hand (Hover) to a Closed Fist (Grab) to signal that the physics engine was engaged.</figcaption>
            </figure>

            <h4>3. The “State-Aware” Cursor</h4>
            <ul>
                <li><strong>The Problem:</strong> “Blank Canvas Anxiety.” Users would stand frozen, asking “Does it see me?”</li>
                <li><strong>The Solution:</strong> We replaced the standard arrow pointer with a biologically relatable hand cursor that communicated system confidence in real-time.
                    <ul>
                        <li><strong>Open Hand:</strong> “I see you, but you aren’t doing anything.”</li>
                        <li><strong>Progress:</strong> “I see you pushing.” (Visual timer fills up).</li>
                        <li><strong>Grip:</strong> “I am holding this object.”</li>
                    </ul>
                </li>
            </ul>

            <h3>Evangelizing NUI</h3>
            <p>To ensure adoption across the wider Microsoft ecosystem, we needed to make these new "Natural User Interface" concepts accessible. We designed a quick reference guide that served as both a practical tool for developers and a promotional piece for stakeholders.</p>
            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/kinect-poster-front.jpg" alt="NUI Reference Poster Front" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The NUI Poster Front: Quick reference for core gestures.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/kinect-poster-back.jpg" alt="NUI Reference Poster Back" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The NUI Poster Back: Detailed interaction guidelines.</figcaption>
            </figure>

            <h3>Outcome & Impact</h3>
            <p><strong>Adoption:</strong> By the time SDK 1.7 launched, the Kinect for Windows program had scaled to tens of thousands of active developers. The interaction patterns we defined became the standard for touch-free kiosks in healthcare (sterile environments) and retail.</p>
            <p><strong>Cross-Platform Legacy:</strong> Our work on the Windows SDK directly influenced the Xbox One interface. Developers pushed back against the platform divide, leading the Xbox team to integrate our “Push” and “Grip” models into the console’s core OS.</p>
            <p><em>“The new interaction controls [in 1.7] are a huge time saver. We used to spend weeks tuning gesture detection; now we just drop a KinectTileButton into XAML and it works.”</em> — MSDN Forum User, April 2013</p>

            <h3>Reflection: The AI Parallel</h3>
            <p>Designing for Kinect was an early masterclass in <strong>Probabilistic Design</strong>—a challenge that is now defining the modern era of AI.</p>
            <ul>
                <li><strong>Then (Kinect):</strong> The system had to guess the user’s intent from “noisy” skeletal data.</li>
                <li><strong>Now (AI):</strong> We are designing for LLMs that must guess intent from “noisy” natural language prompts.</li>
            </ul>
            <p><strong>The enduring lesson:</strong> In probabilistic systems, you cannot just pass the raw machine output to the user. You must build an interface that handles uncertainty gracefully.</p>
            <ul>
                <li><strong>Kinect:</strong> We added “magnetic snapping” to smooth out physical jitter.</li>
                <li><strong>AI:</strong> We add “guardrails” and “citations” to smooth out hallucinations.</li>
            </ul>
            <p>My work on Kinect taught me that the goal isn’t to make the machine perfect; it’s to make the user feel confident in an imperfect system.</p>
        `
    },
    {
        title: "ML Platform",
        slug: "ml-platform",
        description: "Modular end-to-end ML platform that helps all stakeholders to collaboratively identify signal within data.",
        category: "Product Design",
        company: "Vianai Systems",
        timeline: "2020 - 2021",
        role: "UX/Visual Designer",
        team: "Cross-functional",
        outcome: "Platform Launch",
        image: "/ml-hero.png",
        content: `
            <h3>The Challenge</h3>
            <p>Machine learning workflows often involve disjointed tools and complex underlying micro-services that make collaboration difficult. The core challenge was to abstract these technical complexities into a cohesive user experience that could serve different roles involved in building models, generating predictions, and explaining model behavior.</p>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/ml-process.png" alt="ML Workflow Complexity Map" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Mapping the complexity: Early user flows identifying the disjointed steps in the original ML workflow.</figcaption>
            </figure>

            <h3>The Solution</h3>
            <p>Design a “Power to the People” user experience that unifies the ML workflow.</p>
            <ul>
                <li><strong>Unified Interface:</strong> Created a cohesive UX that abstracts the capabilities of underlying micro-services, making powerful ML tools accessible.</li>
                <li><strong>Role-Based Enablement:</strong> The platform was designed to support specific needs of various user roles, allowing them to achieve results faster and with a significantly improved user experience.</li>
                <li><strong>Collaborative Focus:</strong> The architecture emphasizes collaboration, helping teams work together to find signal in their data effectively.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/ml-modelselection.png" alt="Model Selection Dashboard" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Transforming data into decision-making: The Model Selection dashboard abstracts complex performance logs into an interactive scatter plot, allowing data scientists to instantly filter and compare models based on metrics like Precision and F1 Score.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/ml-settings.png" alt="Integrated Development Environment" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Integrated Development Environment: A split-view configuration screen that allows technical leads to manage permissions and edit TensorFlow code without leaving the platform ecosystem.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/ml-deploy.png" alt="Model Deployment Radar Charts" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The Model Deployment screen uses radar charts to visualize optimization trade-offs like latency vs. accuracy</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/ml-settingshome.png" alt="ML Platform Settings Hub" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The Settings hub provides a centralized command center for managing every stage of the ML pipeline</figcaption>
            </figure>

            <h3>Key Takeaways</h3>
            <p>The project successfully delivered a platform that democratizes access to machine learning capabilities, allowing users to focus on insights and model behavior rather than grappling with the complexities of the underlying infrastructure.</p>
        `
    },
    {
        title: "Xbox Developer Tools",
        slug: "xbox-developer-tools",
        description: "Designing the developer ecosystem for Xbox, bridging the gap between console management and deep-dive performance optimization.",
        category: "Product Design",
        company: "Microsoft",
        timeline: "2015 - 2016",
        role: "Product Designer",
        team: "Xbox Design",
        outcome: "Shipped Suite of Tools",
        image: "/xbox-hero.jpg",
        content: `
            <h3>The Challenge: Bringing "Consumer Grade" to Dev Tools</h3>
            <p>Game development is notoriously complex. Developers juggle managing hardware devkits (consoles) with deep software optimization on PC. Historically, the tools for this were purely functional—brutalist command lines or dense spreadsheets.</p>
            <p><span style="font-weight: 600;">The Goal:</span> Create a unified developer ecosystem that feels as premium and intuitive as the games being built on it.</p>

            <h3>1. Xbox Dev Mode (Console)</h3>
            <p><strong>Context:</strong> Developers need to switch their retail Xbox into a "Dev Kit" to test builds. This was previously a hidden, complex process.</p>
            <p><strong>The Solution:</strong> We designed a "Dev Mode" app that lives on the console. It handles:</p>
            <ul>
                <li><strong>Sandbox Switching:</strong> Moving securely between Retail and Development environments.</li>
                <li><strong>Account Management:</strong> Handling test accounts and permissions seamlessly.</li>
                <li><strong>Remote Management:</strong> allowing the console to be controlled via PC without needing physical access.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-dev-console.jpg" alt="Xbox Dev Mode Console Interface" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The Xbox Dev Mode dashboard on the console.</figcaption>
            </figure>

            <h3>2. PIX (Performance Investigator for Xbox)</h3>
            <p><strong>Context:</strong> When a game drops frames or stutters, developers need to know <em>exactly</em> why. Is it the GPU? The CPU? A memory leak?</p>
            <p><strong>The Solution:</strong> PIX is the ultimate microscope for the graphics pipeline. We transformed raw performance logs into a visual dashboard that provides:</p>
            <ul>
                <li><strong>Visual Profiling:</strong> Timeline graphs that correlate frame drops with system events.</li>
                <li><strong>Memory Heatmaps:</strong> Visualizing memory allocation to spot leaks instantly.</li>
                <li><strong>Actionable Hints:</strong> The tool doesn't just show data; it suggests specific optimizations (e.g., "Texture overlap detected").</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-dev-pix.jpg" alt="PIX Profiling Dashboard" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">PIX for Windows: Visualizing real-time performance data to pinpoint bottlenecks.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-dev-pix2.jpg" alt="PIX Memory Analysis" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Memory Analysis: Deep-dive visualization of memory allocation.</figcaption>
            </figure>

            <h3>Impact</h3>
            <p>By treating internal developer tools with the same design rigor as consumer products, we reduced the cognitive load on engineers. This allows them to spend less time fighting their tools and more time polishing their games.</p>
        `
    },
    {
        title: "Mana Integrated AI",
        slug: "mana",
        description: "A unified, flexible, and modular platform that enables industry-specific AI solutions.",
        category: "Product Design",
        company: "Infosys",
        timeline: "2016",
        role: "Creative Director",
        team: "Product & Marketing",
        outcome: "Visual Identity & Launch",
        image: "/mana-flyer.jpg",
        content: `
            <h3>Product Realization</h3>
            <p>Mana AI (now Nia), one of the largest driving forces of the business, needed to be quickly realized and visualized to provide various departments with communication tools for the product.</p>
            <p><span style="font-weight: 600;">The Goal:</span> Transform a complex, abstract AI platform into a tangible, understandable product ecosystem.</p>

            <h3>Key Deliverables</h3>
            <ul>
                <li><strong>Website Design & Build:</strong> Created the central hub for the platform's presence.</li>
                <li><strong>UI/UX Prototyping:</strong> Visualizing the modular platform's capabilities for custom customer experiences.</li>
                <li><strong>Brand Assets:</strong> Printed posters and email templates to unify internal and external messaging.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/mana-website.jpg" alt="Mana Website Design" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Website Design: The unified digital presence for the Mana platform.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/mana-graphic.gif" alt="Mana Platform Visualization" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Visual Identity: Dynamic elements illustrating the platform's core concepts.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <video src="/mana-demo.mp4" autoplay loop muted playsinline style="width: 100%; height: auto; border-radius: 8px;"></video>
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">UI/UX Prototyping: Visualizing the modular platform in action.</figcaption>
            </figure>

            <h3>The Platform</h3>
            <p>As a unified, flexible, and modular platform, Mana enables a wide set of industry and function-specific solutions. It allows customers to build custom experiences to suit their specific business needs, moving beyond generic AI implementations.</p>
        `
    },
    {
        title: "Digital Art",
        slug: "digital-art",
        description: "A hyper-realistic digital painting application built for the touch-first era of Windows 8.",
        category: "Product Design",
        company: "Microsoft",
        timeline: "2013",
        role: "Product Designer",
        team: "Startup Business Group",
        outcome: "Featured at MoMA",
        image: "/digitalart-hero.jpg",
        content: `
            <h3>As Real As It Gets</h3>
            <p>The goal was simple but ambitious: bring the tactile joy of physical painting to the digital screen. This wasn't just about color on a canvas; it was about simulating the physics of bristle behavior, paint viscosity, and blending.</p>
            <p><span style="font-weight: 600;">The Challenge:</span> The most realistic and responsive painting simulation technology deserves a delightful UX. We had to design an interface that receded into the background, allowing the artist to stay in their flow state.</p>

            <h3>From Research to Reality</h3>
            <p>After exhaustive research, wireframing, prototyping, and user testing, we arrived at a minimal, gesture-driven interface that felt as natural as a palette and brush.</p>
            
            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/digitalart-paint.jpg" alt="Digital Painting Interface" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The painting interface in action, simulating real oil paint physics.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/digitalart-crayon.jpg" alt="Crayon Texture Simulation" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Realistic texture simulation: Crayon and pastel behaviors.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/digitalart-moma.jpg" alt="MoMA Installation" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The installation at the Museum of Modern Art (MoMA) in New York.</figcaption>
            </figure>

            <h3>Impact</h3>
            <p>The working product was selected to be featured at the <strong>Museum of Modern Art (MoMA)</strong> in NYC, where visitors used it to create digital masterpieces for several months.</p>
        `
    },
    {
        title: "Motion Design Reel",
        slug: "motion-design-reel",
        description: "A sampling of motion design work created for the Infosys Foundation USA.",
        category: "Motion Design",
        company: "Infosys Foundation USA",
        timeline: "2019",
        role: "Motion Graphics Designer",
        team: "Infosys Studio",
        outcome: "Brand Motion System",
        image: "https://www.youtube.com/watch?v=KElGRlX5noI",
        content: `
            <h3>Bringing the Brand to Life</h3>
            <p>Motion design plays a crucial role in storytelling. This reel compiles various projects created for the Infosys Foundation USA, demonstrating how animation can clarify complex ideas and add emotional resonance to a brand.</p>

            <h3>Deliverables</h3>
            <ul>
                <li><strong>Logo Animations:</strong> Bringing static identities to life for video intros and outros.</li>
                <li><strong>Lower Thirds:</strong> Custom broadcast graphics for interviews and event coverage.</li>
                <li><strong>Infographics:</strong> Animated data visualizations to explain impact metrics.</li>
                <li><strong>Title Sequences:</strong> Engaging openers for documentary-style content.</li>
            </ul>


        `
    },

    {
        title: "Xbox Website",
        slug: "xbox-website",
        description: "A premium shopping experience for games, content, and media on Xbox.com.",
        category: "Web Design",
        company: "Microsoft",
        timeline: "2012",
        role: "UX/Visual Designer",
        team: "Xbox Design",
        outcome: "Site Launch",
        image: "/xbox-hero.jpg",
        content: `
            <h3>Game On</h3>
            <p>Big, beautiful game imagery fills the screen. Every aspect of the shopping experience immerses the user in high-quality game graphics, creating a premium browsing experience that rivals the console interface.</p>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-web-devices.jpg" alt="Xbox Website Devices" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">A unified experience across desktop, tablet, and mobile.</figcaption>
            </figure>

            <h3>Key Deliverables</h3>
            <ul>
                <li><strong>User Flows & IA:</strong> Mapping out the complex ecosystem of game purchases and add-ons.</li>
                <li><strong>Wireframes & Prototypes:</strong> Iterating on the shopping cart and checkout experience.</li>
                <li><strong>Visual Design:</strong> Creating high-fidelity comps that aligned with the new modern design language.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-web-flows.png" alt="Xbox Website User Flows" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Mapping the purchase funnel and user journeys.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-web-gallery.jpg" alt="Xbox Website Media Gallery" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">High-fidelity visual design for the media gallery.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/xbox-web-dlc.jpg" alt="Xbox Website DLC Design" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Designed to handle complex game add-ons and bundles.</figcaption>
            </figure>
        `
    },

    {
        title: "Medical UI",
        slug: "medical",
        description: "A critical safety interface for managing medication dosage on pump infusion systems.",
        category: "Product Design",
        company: "Teague",
        timeline: "2014",
        role: "Interaction & Visual Designer",
        team: "Teague Studio",
        outcome: "System Design",
        image: "/medical-hero.jpg",
        content: `
            <h3>No Room for Error</h3>
            <p>In healthcare, user experience isn't just about delight—it's about safety. This project involved designing a backend user interface for nurses and pharmacists to manage medication details that feed directly into hardware pump infusion systems.</p>

            <h3>The Challenge</h3>
            <p>When a user interaction has the potential to erroneously administer the wrong medicine or dosage, clarity is paramount. The interface needed to be high-contrast, legible, and structurally rigid to prevent cognitive load errors during high-stress situations.</p>

            <h3>Deliverables</h3>
            <ul>
                <li><strong>Information Architecture:</strong> Structuring complex drug libraries and patient data.</li>
                <li><strong>Interactive Prototypes:</strong> Testing workflows on actual touch hardware.</li>
                <li><strong>Visual System:</strong> A clean, clinical aesthetic designed for readability.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-browser.jpg" alt="Medical Administration Dashboard" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The web-based administration dashboard.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-hardware.jpg" alt="Infusion Pump Interface" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The pump interface running on dedicated hardware.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-visual.jpg" alt="Visual Design System" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">High-fidelity visual design system.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-colors.jpg" alt="Color Palette" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">High-contrast color palette for alert states.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-typography.jpg" alt="Typography Guidelines" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Typography optimized for legibility at a distance.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-icons.jpg" alt="Medical Iconography" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Iconography designed for clarity and quick recognition.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/medical-wires.jpg" alt="Wireframes" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Detailed wireframes mapping out complex infusion workflows.</figcaption>
            </figure>
        `
    },
    {
        title: "Netflix Concept",
        slug: "netflix-concept",
        description: "A single-day, time-boxed design exercise applying the Stanford d.School Design Thinking process.",
        category: "Concept",
        company: "Personal",
        timeline: "2014",
        role: "Product Designer",
        team: "Solo",
        outcome: "Personal Project",
        image: "/netflix-hero.jpg",
        content: `
            <h3>The Challenge</h3>
            <p>A single day, time-boxed design exercise putting into action the Design Thinking process by the Stanford d.School. The goal was to rapid-prototype a social featureset for Netflix.</p>

            <h3>Active Entertainment</h3>
            <p>I recruited friends to help with user testing of paper prototypes. Netflix never adopted these features, but Amazon implemented a very similar "X-Ray" feature less than a year after I conducted this test. I guess I was on the right track.</p>

            <h3>Deliverables</h3>
            <ul>
                <li><strong>Empathy Map:</strong> Understanding user needs and viewing habits.</li>
                <li><strong>Paper Prototypes:</strong> Rapid low-fidelity testing with real users.</li>
                <li><strong>Visual Designs:</strong> High-fidelity mockups of the proposed interface.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/netflix-trivia.png" alt="Netflix Trivia Concept UI" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Concept UI: An interactive trivia layer over active content.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/netflix-prototypes.jpg" alt="Paper Prototypes" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Paper prototyping the interaction model.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/netflix-process.jpg" alt="Design Thinking Process" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">The design thinking process: Empathy mapping to final concept.</figcaption>
            </figure>
        `
    },
    {
        title: "Pen & Touch Scenarios",
        slug: "pentouch",
        description: "Product development scenario explorations for a conceptual tablet device (Surface) across a wide variety of markets.",
        category: "Interaction Design",
        company: "Microsoft SBG",
        timeline: "2013",
        role: "UX/Product Designer",
        team: "Startup Business Group",
        outcome: "Concept Visuals",
        image: "/pentouch-hero.jpg",
        content: `
            <h3>Visual Thinking</h3>
            <p>Sometimes realizing an idea through visuals brings it to life. This project focused on product development scenario explorations for a conceptual tablet device (which would become Surface) across a wide variety of markets and use cases.</p>

            <h3>Deliverables</h3>
            <ul>
                <li><strong>Ideation Sessions:</strong> Brainstorming novel interaction models combining pen and touch inputs.</li>
                <li><strong>Proof of Concept:</strong> Creating visual comps to demonstrate the viability of the hardware form factor in professional workflows.</li>
                <li><strong>Scenario Mapping:</strong> Exploring potential applications in education, design, and enterprise markets.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-1.png" alt="Concept Scenario 1" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-2.png" alt="Concept Scenario 2" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-3.png" alt="Concept Scenario 3" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-4.png" alt="Concept Scenario 4" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-5.png" alt="Concept Scenario 5" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-6.png" alt="Concept Scenario 6" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-7.png" alt="Concept Scenario 7" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/pentouch-8.png" alt="Concept Scenario 8" style="width: 100%; height: auto; border-radius: 8px;" />
            </figure>
        `
    },
    {
        title: "Hardware Concepts",
        slug: "hardware",
        description: "Turning a mobile device into a portable, collaborative, and interactive meeting that you can take anywhere.",
        category: "Industrial Design",
        company: "Microsoft SBG",
        timeline: "2013",
        role: "Creative Director / Product Designer",
        team: "Startup Business Group",
        outcome: "Concept Visuals",
        image: "/hardware-hero.jpg",
        content: `
            <h3>The Vision</h3>
            <p>What if you could turn a mobile device into a portable, collaborative, and interactive meeting that you can take anywhere? This project explored hardware concepts to make that a reality.</p>

            <h3>Concepts</h3>
            <p><strong>Fold Up Mobile Projector:</strong> A projector that turns a phone screen into a larger interactive workspace for multiple users on a horizontal or vertical surface.</p>
            <p><strong>Mobile Dock Projector:</strong> A projector that turns a phone screen into a larger interactive workspace for multiple users on a horizontal surface.</p>

            <h3>Deliverables</h3>
            <ul>
                <li><strong>Ideation:</strong> Sketching and brainstorming form factors for portable projection.</li>
                <li><strong>Research:</strong> Investigating use cases for mobile collaboration.</li>
                <li><strong>Proof of Concept:</strong> High-fidelity visual comps to illustrate the product vision.</li>
            </ul>

            <figure style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 3rem 0; width: 100%;">
                <figure style="margin: 0;">
                    <div style="width: 100%; aspect-ratio: 16/9; position: relative; border-radius: 8px; overflow: hidden;">
                        <img src="/hardware-white.jpg" alt="Fold Up Mobile Projector Concept" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                    <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Fold Up Mobile Projector: Portable vertical interaction.</figcaption>
                </figure>
                <figure style="margin: 0;">
                    <div style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; overflow: hidden;">
                         <iframe src="https://player.vimeo.com/video/69133953" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                     <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Concept Animation</figcaption>
                </figure>
            </figure>

            <figure style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 3rem 0; width: 100%;">
                <figure style="margin: 0;">
                    <div style="width: 100%; aspect-ratio: 16/9; position: relative; border-radius: 8px; overflow: hidden;">
                        <img src="/hardware-black.jpg" alt="Mobile Dock Projector Concept" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                    <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Mobile Dock Projector: Collaborative horizontal workspace.</figcaption>
                </figure>
                <figure style="margin: 0;">
                    <div style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; overflow: hidden;">
                         <iframe src="https://player.vimeo.com/video/69133952" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                     <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Concept Animation</figcaption>
                </figure>
            </figure>
        `
    },
    {
        title: "Live Search / Bing",
        slug: "bing",
        description: "Designing browse experiences for News, Images, and Videos during the rebrand from Live Search to Bing.",
        category: "Product Design",
        company: "Microsoft",
        timeline: "2009",
        role: "UX Designer",
        team: "Bing Studio",
        outcome: "Rebrand Launch",
        image: "/bing-hero.jpg",
        content: `
            <h3>Just Browsing</h3>
            <p>Sometimes you don’t know what you’re looking for—you just want to look around. I worked on several projects at Live Search and during the rebrand to Bing, focusing on the browse experiences for News, Images, and Videos.</p>

            <h3>A Peek at the Process</h3>
            <p>The project involved extensive competitive analysis, desirability studies, visualizing, refining, and testing to define the next generation of search.</p>

            <h3>Deliverables</h3>
            <ul>
                <li><strong>Research:</strong> Competitive analysis and desirability studies.</li>
                <li><strong>UX Design:</strong> Wireframes, interactive prototypes, and user testing.</li>
                <li><strong>Visual Design:</strong> Visual comps, specs, and alignment with the new brand identity.</li>
            </ul>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/bing-news.jpg" alt="Bing News Browse Experience" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">News Browse Experience: Visualizing top stories.</figcaption>
            </figure>

            <figure style="margin: 3rem 0; width: 100%; max-width: 100%;">
                <img src="/bing-news-thumbnails.jpg" alt="Bing News Thumbnail Explorations" style="width: 100%; height: auto; border-radius: 8px;" />
                <figcaption style="font-size: 0.9rem; color: var(--muted); text-align: center; margin-top: 0.75rem;">Thumbnail Grid Explorations: Refining layout density.</figcaption>
            </figure>
        `
    },

];
