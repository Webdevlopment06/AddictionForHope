// US States data
const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
  'West Virginia', 'Wisconsin', 'Wyoming'
];

// Sample state data
const stateData = {
  default: {
    treatmentCenters: [
      { name: 'State Workforce Development Center', phone: '(555) 123-4567' },
      { name: 'Recovery to Work Program', phone: '(555) 234-5678' },
      { name: 'Vocational Rehabilitation Services', phone: '(555) 345-6789' }
    ],
    supportGroups: [
      { name: 'Job Readiness Workshops', contact: 'Weekly sessions available' },
      { name: 'Peer Support Employment Groups', contact: 'Call (555) 456-7890' },
      { name: 'Career Mentorship Program', contact: 'Online & In-Person' }
    ],
    resources: [
      'State Department of Labor Job Services',
      'Local One-Stop Career Centers',
      'Recovery-to-Work Grant Programs',
      'Employer Tax Credit Information'
    ]
  }
};

const defaultConfig = {
  background_color: "#1800AD",
  surface_color: "#fff",
  text_color: "#2a2e30",
  primary_action_color: "#f1b327",
  secondary_action_color: "#000",
  font_family: "system-ui, -apple-system, sans-serif",
  font_size: 16,
  site_title: "Addiction to Hope",
  tagline: "Connecting Recovery to Careers",
  hero_heading: "Your Career Starts Here",
  hero_subheading: "Recovery opens doors. We connect people in recovery with meaningful employment opportunities and career support. Your past doesn't define your future.",
  cta_button_text: "Find Jobs Now",
  info_heading: "Career Resources for Recovery",
  info_subheading: "Access the tools and support you need to build a successful career. We believe in second chances and the power of meaningful work.",
  resources_heading: "Employment Support",
  resources_subheading: "From resume building to interview coaching, we provide comprehensive career services tailored for people in recovery.",
  map_heading: "Find Job Services in Your State",
  map_subheading: "Select your state to find local employment programs, vocational training, and job placement services designed for people in recovery.",
  about_heading: "About Addiction to Hope",
  about_text: "Addiction to Hope is a comprehensive employment platform dedicated to helping people in recovery find meaningful work. We partner with recovery-friendly employers and provide career support services to help you build a stable, fulfilling future. Employment is a cornerstone of lasting recovery.",
  contact_heading: "Ready to Take the First Step?",
  contact_text: "Reaching out for help is a sign of strength. Our compassionate team is here 24/7 to answer your questions and guide you toward the support you need.",
  footer_text: "© 2024 Addiction to Hope. All rights reserved. Recovery is possible."
};

// Initialize state grid
function initializeStateGrid() {
  const stateGrid = document.getElementById('state-grid');
  stateGrid.innerHTML = '';
  
  states.forEach(state => {
    const button = document.createElement('button');
    button.className = 'state-button px-4 py-3 rounded-lg font-semibold text-sm shadow hover:shadow-lg';
    button.textContent = state;
    button.onclick = () => showStateDetails(state);
    stateGrid.appendChild(button);
  });
}

function showStateDetails(stateName) {
  const stateGrid = document.getElementById('state-grid');
  const stateDetails = document.getElementById('state-details');
  const selectedStateName = document.getElementById('selected-state-name');
  
  stateGrid.style.display = 'none';
  stateDetails.classList.remove('hidden');
  selectedStateName.textContent = stateName;
  
  const data = stateData[stateName] || stateData.default;
  
  const treatmentList = document.getElementById('treatment-centers');
  treatmentList.innerHTML = data.treatmentCenters.map(center => `
    <li class="pb-3 border-b">
      <p class="font-semibold">${center.name}</p>
      <a href="tel:${center.phone}">${center.phone}</a>
    </li>
  `).join('');
  
  const supportList = document.getElementById('support-groups');
  supportList.innerHTML = data.supportGroups.map(group => `
    <li class="pb-3 border-b">
      <p class="font-semibold">${group.name}</p>
      <p class="text-sm opacity-80">${group.contact}</p>
    </li>
  `).join('');
  
  const resourcesList = document.getElementById('state-resources');
  resourcesList.innerHTML = data.resources.map(resource => `
    <li class="flex items-start">
      <span class="mr-2">•</span>
      <span>${resource}</span>
    </li>
  `).join('');
  
  stateDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideStateDetails() {
  const stateGrid = document.getElementById('state-grid');
  const stateDetails = document.getElementById('state-details');
  
  stateDetails.classList.add('hidden');
  stateGrid.style.display = 'grid';
  document.getElementById('state-services').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function onConfigChange(config) {
  const root = document.documentElement;

  root.style.setProperty('--background', config.background_color || defaultConfig.background_color);
  root.style.setProperty('--surface', config.surface_color || defaultConfig.surface_color);
  root.style.setProperty('--text', config.text_color || defaultConfig.text_color);
  root.style.setProperty('--primary', config.primary_action_color || defaultConfig.primary_action_color);
  root.style.setProperty('--secondary', config.secondary_action_color || defaultConfig.secondary_action_color);

  document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
  document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('hero-heading').textContent = config.hero_heading || defaultConfig.hero_heading;
  document.getElementById('hero-subheading').textContent = config.hero_subheading || defaultConfig.hero_subheading;
  document.getElementById('cta-button').textContent = config.cta_button_text || defaultConfig.cta_button_text;
  document.getElementById('info-heading').textContent = config.info_heading || defaultConfig.info_heading;
  document.getElementById('info-subheading').textContent = config.info_subheading || defaultConfig.info_subheading;
  document.getElementById('resources-heading').textContent = config.resources_heading || defaultConfig.resources_heading;
  document.getElementById('resources-subheading').textContent = config.resources_subheading || defaultConfig.resources_subheading;
  document.getElementById('map-heading').textContent = config.map_heading || defaultConfig.map_heading;
  document.getElementById('map-subheading').textContent = config.map_subheading || defaultConfig.map_subheading;
  document.getElementById('about-heading').textContent = config.about_heading || defaultConfig.about_heading;
  document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
  document.getElementById('contact-heading').textContent = config.contact_heading || defaultConfig.contact_heading;
  document.getElementById('contact-text').textContent = config.contact_text || defaultConfig.contact_text;
  document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["site_title", config.site_title || defaultConfig.site_title],
    ["tagline", config.tagline || defaultConfig.tagline],
    ["hero_heading", config.hero_heading || defaultConfig.hero_heading],
    ["hero_subheading", config.hero_subheading || defaultConfig.hero_subheading],
    ["cta_button_text", config.cta_button_text || defaultConfig.cta_button_text],
    ["info_heading", config.info_heading || defaultConfig.info_heading],
    ["info_subheading", config.info_subheading || defaultConfig.info_subheading],
    ["resources_heading", config.resources_heading || defaultConfig.resources_heading],
    ["resources_subheading", config.resources_subheading || defaultConfig.resources_subheading],
    ["map_heading", config.map_heading || defaultConfig.map_heading],
    ["map_subheading", config.map_subheading || defaultConfig.map_subheading],
    ["about_heading", config.about_heading || defaultConfig.about_heading],
    ["about_text", config.about_text || defaultConfig.about_text],
    ["contact_heading", config.contact_heading || defaultConfig.contact_heading],
    ["contact_text", config.contact_text || defaultConfig.contact_text],
    ["footer_text", config.footer_text || defaultConfig.footer_text]
  ]);
}

// Initialize
initializeStateGrid();
document.getElementById('close-state-details').addEventListener('click', hideStateDetails);

// Apply initial colors
onConfigChange(defaultConfig);

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// CTA Button scroll
document.getElementById('cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
