// InfoPlex-security.js - Technox Security System

const RESTRICTED_WORDS = [
    // Violence & Harm
    "kill", "murder", "assault", "rape", "torture", "abuse", "violence", 
    "terrorist", "bomb", "weapon", "gun", "knife", "blood", "gore", "death",
    "suicide", "die", "dead", "corpse", "massacre", "slaughter", "execution",
    "stab", "shoot", "strangle", "mutilate", "behead", "dismember",
    
    // Explicit Content
    "fuck", "shit", "bitch", "bastard", "damn", "hell", "ass", "penis",
    "vagina", "sex", "porn", "xxx", "nude", "naked", "nsfw", "cock",
    "dick", "pussy", "whore", "slut", "cunt", "motherfucker", "asshole",
    "tits", "boobs", "booty", "masturbate", "orgasm", "hentai",
    
    // Drugs
    "cocaine", "heroin", "meth", "marijuana", "weed", "drug", "crack",
    "lsd", "ecstasy", "molly", "cannabis", "narcotic", "opium", "fentanyl",
    
    // Hate Speech
    "nazi", "hitler", "racist", "genocide", "supremacy", "kkk", "nigger",
    "faggot", "retard", "nigga",
    
    // Hacking & Illegal
    "hack", "hacker", "crack", "exploit", "malware", "virus", "ddos",
    "phishing", "ransomware", "keylogger", "trojan", "botnet", "steal",
    
    // Additional Extreme Terms
    "pedophile", "child abuse", "snuff", "necrophilia", "bestiality",
    "incest", "rape", "molest"
];

function checkForBadWords(text) {
    const lowerText = text.toLowerCase();
    
    for (let word of RESTRICTED_WORDS) {
        if (lowerText.includes(word)) {
            return word;
        }
    }
    
    return null;
}

function triggerTechnox(word) {
    document.getElementById('aegisShield').style.display = 'flex';
    document.getElementById('blockedWord').innerText = `Blocked word detected: "${word}"`;
    document.getElementById('urlInput').value = '';
}

function closeShield() {
    document.getElementById('aegisShield').style.display = 'none';
}