// AI Tools Directory - Main JavaScript

// AI Tools Data
const tools = [
    {
        name: "Jasper AI",
        category: "writing",
        icon: "✍️",
        iconClass: "writing",
        description: "AI writing assistant for long-form content, marketing copy, and SEO-optimized articles.",
        features: ["Long-form", "SEO", "Templates"],
        url: "https://www.jasper.ai/?fpr=thomas",
        affiliate: true
    },
    {
        name: "Copy.ai",
        category: "writing",
        icon: "✍️",
        iconClass: "writing",
        description: "AI copywriting tool for ads, emails, social posts, and marketing content.",
        features: ["Ads", "Emails", "Free Tier"],
        url: "https://www.copy.ai/?via=thomas",
        affiliate: true
    },
    {
        name: "Midjourney",
        category: "image",
        icon: "🎨",
        iconClass: "image",
        description: "AI art generator creating stunning images from text prompts. Discord-based.",
        features: ["Art", "Realism", "Styles"],
        url: "https://www.midjourney.com/",
        affiliate: false
    },
    {
        name: "DALL-E 3",
        category: "image",
        icon: "🎨",
        iconClass: "image",
        description: "OpenAI's image generation integrated with ChatGPT. Photorealistic and artistic.",
        features: ["Text-to-Image", "ChatGPT", "API"],
        url: "https://openai.com/dall-e-3",
        affiliate: false
    },
    {
        name: "GitHub Copilot",
        category: "coding",
        icon: "💻",
        iconClass: "coding",
        description: "AI pair programmer that suggests code as you type. Trained on billions of lines.",
        features: ["Autocomplete", "VS Code", "$10/mo"],
        url: "https://github.com/features/copilot",
        affiliate: false
    },
    {
        name: "Tabnine",
        category: "coding",
        icon: "💻",
        iconClass: "coding",
        description: "AI code completion with privacy-focused training. Works in all major IDEs.",
        features: ["Private AI", "Local", "Teams"],
        url: "https://www.tabnine.com/",
        affiliate: false
    },
    {
        name: "Claude",
        category: "chat",
        icon: "💬",
        iconClass: "chat",
        description: "Anthropic's AI assistant with 200K context window. Excellent for long documents.",
        features: ["200K tokens", "Safe", "Documents"],
        url: "https://claude.ai/",
        affiliate: false
    },
    {
        name: "ChatGPT",
        category: "chat",
        icon: "💬",
        iconClass: "chat",
        description: "OpenAI's conversational AI. GPT-4 powers advanced reasoning and creativity.",
        features: ["GPT-4", "Plugins", "API"],
        url: "https://chat.openai.com/",
        affiliate: false
    },
    {
        name: "Synthesia",
        category: "video",
        icon: "🎬",
        iconClass: "video",
        description: "AI video generation with digital avatars. Create professional videos from text.",
        features: ["Avatars", "Multilingual", "Business"],
        url: "https://www.synthesia.io/",
        affiliate: false
    },
    {
        name: "ElevenLabs",
        category: "audio",
        icon: "🎙️",
        iconClass: "audio",
        description: "Voice synthesis with realistic AI voices. Clone voices or create new ones.",
        features: ["Voice Clone", "Multiple", "API"],
        url: "https://elevenlabs.io/",
        affiliate: false
    },
    {
        name: "Notion AI",
        category: "productivity",
        icon: "📊",
        iconClass: "productivity",
        description: "AI built into Notion. Write, summarize, and brainstorm in your workspace.",
        features: ["Workspace", "Notes", "Summarize"],
        url: "https://www.notion.so/product/ai",
        affiliate: false
    },
    {
        name: "Perplexity AI",
        category: "research",
        icon: "🔍",
        iconClass: "research",
        description: "AI-powered search with citations. Answer questions with sourced information.",
        features: ["Search", "Citations", "Free"],
        url: "https://www.perplexity.ai/",
        affiliate: false
    }
];

const categoryLabels = {
    writing: "Writing",
    image: "Image",
    coding: "Coding",
    video: "Video",
    audio: "Audio",
    chat: "Chat",
    research: "Research",
    productivity: "Productivity"
};

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');

// Render Tools
function renderTools(toolsToRender) {
    toolsGrid.innerHTML = toolsToRender.map(tool => `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-header">
                <div class="tool-icon ${tool.iconClass}">${tool.icon}</div>
                <div class="tool-title">
                    <h3>${tool.name}</h3>
                    <span class="category">${categoryLabels[tool.category]}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-features">
                ${tool.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
            <a href="${tool.url}" target="_blank" rel="noopener nofollow" class="tool-btn">
                ${tool.affiliate ? 'Try Free →' : 'Visit Website →'}
            </a>
        </div>
    `).join('');
}

// Filter by Category
let currentCategory = 'all';
let currentSearch = '';

function filterTools() {
    const filtered = tools.filter(tool => {
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        const matchesSearch = tool.name.toLowerCase().includes(currentSearch) || 
                            tool.description.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
    renderTools(filtered);
}

// Event Listeners
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        filterTools();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    filterTools();
});

// Initial render
renderTools(tools);

// Lazy load AdSense
if (typeof adsbygoogle !== 'undefined') {
    (adsbygoogle = window.adsbygoogle || []).push({});
}
