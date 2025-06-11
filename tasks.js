// Task data with comprehensive validation criteria
const tasksData = {
    beginner: [
        {
            id: 1,
            title: 'HTML Document Structure',
            description: 'Create a basic HTML5 document with proper structure including DOCTYPE, html, head, and body tags.',
            difficulty: 'easy',
            requirements: [
                'HTML5 DOCTYPE declaration',
                'html, head, and body tags',
                'title element in head',
                'Valid HTML structure'
            ],
            expectedOutput: {
                requiredElements: ['!DOCTYPE', 'html', 'head', 'body', 'title'],
                description: 'Must contain proper HTML5 document structure'
            }
        },
        {
            id: 2,
            title: 'Text Elements and Headings',
            description: 'Use different heading levels (h1-h6) and text formatting elements like paragraphs, strong, and emphasis.',
            difficulty: 'easy',
            requirements: [
                'At least 3 different heading levels (h1, h2, h3)',
                'Paragraph elements with text',
                'Strong and emphasis tags',
                'Proper heading hierarchy'
            ],
            expectedOutput: {
                requiredElements: ['h1', 'h2', 'p', 'strong', 'em'],
                description: 'Must contain various heading levels and text formatting'
            }
        },
        {
            id: 3,
            title: 'Links and Navigation',
            description: 'Create hyperlinks and navigation using anchor tags with different link types.',
            difficulty: 'easy',
            requirements: [
                'External links with href attribute',
                'Internal page links',
                'Navigation structure with nav element',
                'Proper link text'
            ],
            expectedOutput: {
                requiredElements: ['a', 'nav'],
                attributes: ['href'],
                description: 'Must contain navigation with various link types'
            }
        },
        {
            id: 4,
            title: 'Images and Media',
            description: 'Add images with proper accessibility attributes and semantic markup.',
            difficulty: 'easy',
            requirements: [
                'img elements with src and alt attributes',
                'figure and figcaption for semantic markup',
                'Descriptive alt text',
                'Proper image sizing'
            ],
            expectedOutput: {
                requiredElements: ['img', 'figure', 'figcaption'],
                attributes: ['src', 'alt'],
                description: 'Must contain images with accessibility attributes'
            }
        },
        {
            id: 5,
            title: 'Lists and Organization',
            description: 'Create ordered and unordered lists with proper nesting and structure.',
            difficulty: 'easy',
            requirements: [
                'Unordered list (ul) with list items',
                'Ordered list (ol) with list items',
                'Nested lists (optional)',
                'Meaningful list content'
            ],
            expectedOutput: {
                requiredElements: ['ul', 'ol', 'li'],
                description: 'Must contain both ordered and unordered lists'
            }
        },
        {
            id: 6,
            title: 'Tables and Data',
            description: 'Create a data table with headers, rows, and cells for presenting tabular information.',
            difficulty: 'medium',
            requirements: [
                'table element with proper structure',
                'thead and tbody sections',
                'th elements for headers',
                'td elements for data cells',
                'At least 3 rows and 3 columns'
            ],
            expectedOutput: {
                requiredElements: ['table', 'thead', 'tbody', 'tr', 'th', 'td'],
                description: 'Must contain a properly structured table'
            }
        },
        {
            id: 7,
            title: 'Basic Forms',
            description: 'Create a functional form with various input types, labels, and submit button.',
            difficulty: 'medium',
            requirements: [
                'form element with action attribute',
                'input fields with different types',
                'label elements properly associated',
                'submit button',
                'Proper form structure'
            ],
            expectedOutput: {
                requiredElements: ['form', 'input', 'label', 'button'],
                attributes: ['type', 'name', 'for'],
                description: 'Must contain a functional form with proper labels'
            }
        },
        {
            id: 8,
            title: 'HTML Attributes',
            description: 'Use global attributes like id, class, and data attributes effectively.',
            difficulty: 'medium',
            requirements: [
                'Elements with id attributes',
                'Elements with class attributes',
                'Data attributes (data-*)',
                'Proper attribute usage'
            ],
            expectedOutput: {
                attributes: ['id', 'class', 'data-'],
                description: 'Must contain elements with various global attributes'
            }
        },
        {
            id: 9,
            title: 'Semantic HTML',
            description: 'Use HTML5 semantic elements to create meaningful page structure.',
            difficulty: 'medium',
            requirements: [
                'header element for page/section header',
                'nav element for navigation',
                'main element for main content',
                'section and article elements',
                'footer element'
            ],
            expectedOutput: {
                requiredElements: ['header', 'nav', 'main', 'section', 'article', 'footer'],
                description: 'Must use semantic HTML5 elements for page structure'
            }
        },
        {
            id: 10,
            title: 'HTML Validation',
            description: 'Create valid HTML5 markup without syntax errors.',
            difficulty: 'medium',
            requirements: [
                'Valid HTML5 syntax',
                'Properly closed tags',
                'Correct nesting',
                'No syntax errors'
            ],
            expectedOutput: {
                validation: true,
                description: 'Must be valid HTML5 without syntax errors'
            }
        }
    ],
    intermediate: [
        {
            id: 11,
            title: 'Advanced Forms',
            description: 'Create complex forms with validation, different input types, and form controls.',
            difficulty: 'medium',
            requirements: [
                'Various input types (email, tel, date, etc.)',
                'select dropdown and textarea',
                'Form validation attributes',
                'fieldset and legend for grouping'
            ],
            expectedOutput: {
                requiredElements: ['form', 'input', 'select', 'textarea'],
                attributes: ['type', 'required', 'pattern'],
                description: 'Must contain advanced form elements with validation'
            }
        },
        {
            id: 12,
            title: 'HTML5 Audio and Video',
            description: 'Embed multimedia content using HTML5 audio and video elements.',
            difficulty: 'medium',
            requirements: [
                'audio element with controls',
                'video element with controls',
                'source elements for multiple formats',
                'Fallback content'
            ],
            expectedOutput: {
                requiredElements: ['audio', 'video', 'source'],
                attributes: ['controls', 'src'],
                description: 'Must contain audio and video elements with proper attributes'
            }
        },
        {
            id: 13,
            title: 'Canvas and SVG',
            description: 'Introduction to HTML5 Canvas and SVG for graphics.',
            difficulty: 'hard',
            requirements: [
                'canvas element with width and height',
                'svg element with basic shapes',
                'Proper dimensions',
                'Basic graphics content'
            ],
            expectedOutput: {
                requiredElements: ['canvas', 'svg'],
                description: 'Must contain both canvas and SVG graphics elements'
            }
        },
        {
            id: 14,
            title: 'Responsive Images',
            description: 'Implement responsive images using srcset and picture elements.',
            difficulty: 'medium',
            requirements: [
                'img element with srcset attribute',
                'picture element with source tags',
                'Different image sizes for different screens',
                'Proper fallback images'
            ],
            expectedOutput: {
                requiredElements: ['img', 'picture', 'source'],
                attributes: ['srcset', 'media'],
                description: 'Must contain responsive image implementations'
            }
        },
        {
            id: 15,
            title: 'Web Components Basics',
            description: 'Create custom HTML elements using web components.',
            difficulty: 'hard',
            requirements: [
                'Custom element definition',
                'Shadow DOM usage',
                'Template elements',
                'Slot elements for content projection'
            ],
            expectedOutput: {
                requiredElements: ['template', 'slot'],
                description: 'Must demonstrate web components concepts'
            }
        },
        {
            id: 16,
            title: 'Accessibility Features',
            description: 'Implement accessibility features using ARIA attributes.',
            difficulty: 'medium',
            requirements: [
                'ARIA labels and descriptions',
                'Role attributes',
                'Accessible form controls',
                'Keyboard navigation support'
            ],
            expectedOutput: {
                attributes: ['aria-', 'role', 'tabindex'],
                description: 'Must contain accessibility attributes'
            }
        },
        {
            id: 17,
            title: 'Meta Tags and SEO',
            description: 'Optimize HTML for search engines using meta tags.',
            difficulty: 'medium',
            requirements: [
                'Meta description and keywords',
                'Open Graph meta tags',
                'Twitter Card meta tags',
                'Viewport meta tag'
            ],
            expectedOutput: {
                requiredElements: ['meta'],
                attributes: ['name', 'content', 'property'],
                description: 'Must contain SEO and social media meta tags'
            }
        },
        {
            id: 18,
            title: 'Progressive Web App Manifest',
            description: 'Create a web app manifest for PWA functionality.',
            difficulty: 'hard',
            requirements: [
                'Link to manifest.json file',
                'Service worker registration',
                'App icons and theme colors',
                'Display and orientation settings'
            ],
            expectedOutput: {
                requiredElements: ['link', 'script'],
                attributes: ['rel', 'href'],
                description: 'Must contain PWA manifest and service worker setup'
            }
        },
        {
            id: 19,
            title: 'Microdata and Schema.org',
            description: 'Implement structured data using microdata.',
            difficulty: 'hard',
            requirements: [
                'Itemscope and itemtype attributes',
                'Itemprop attributes for properties',
                'Schema.org vocabulary',
                'Rich snippets preparation'
            ],
            expectedOutput: {
                attributes: ['itemscope', 'itemtype', 'itemprop'],
                description: 'Must contain structured data markup'
            }
        },
        {
            id: 20,
            title: 'HTML5 APIs Integration',
            description: 'Prepare HTML for modern web APIs integration.',
            difficulty: 'hard',
            requirements: [
                'Geolocation API setup',
                'Local storage preparation',
                'File API input elements',
                'Drag and drop zones'
            ],
            expectedOutput: {
                requiredElements: ['input'],
                attributes: ['type', 'accept', 'draggable'],
                description: 'Must contain HTML for web API integration'
            }
        }
    ],
    advanced: [
        {
            id: 21,
            title: 'Advanced Web APIs',
            description: 'Integrate HTML with modern web APIs.',
            difficulty: 'hard',
            requirements: [
                'Script elements for API integration',
                'Proper HTML structure for API interaction',
                'Event handling setup',
                'Semantic markup'
            ],
            expectedOutput: {
                requiredElements: ['button', 'script'],
                description: 'Must demonstrate web API integration setup'
            }
        },
        {
            id: 22,
            title: 'Performance Optimization',
            description: 'Optimize HTML for performance and loading speed.',
            difficulty: 'hard',
            requirements: [
                'Resource hints (preload, prefetch)',
                'Lazy loading attributes',
                'Critical CSS inlining',
                'Script loading optimization'
            ],
            expectedOutput: {
                requiredElements: ['link', 'script'],
                attributes: ['rel', 'loading', 'async', 'defer'],
                description: 'Must contain performance optimization techniques'
            }
        },
        {
            id: 23,
            title: 'Cross-Origin Resource Sharing',
            description: 'Implement CORS-related HTML attributes.',
            difficulty: 'hard',
            requirements: [
                'Crossorigin attributes',
                'Integrity attributes for security',
                'Referrer policy settings',
                'Content security policy'
            ],
            expectedOutput: {
                attributes: ['crossorigin', 'integrity', 'referrerpolicy'],
                description: 'Must contain CORS and security attributes'
            }
        },
        {
            id: 24,
            title: 'Advanced Form Validation',
            description: 'Create complex form validation with custom patterns.',
            difficulty: 'hard',
            requirements: [
                'Custom validation patterns',
                'Form validation API setup',
                'Error message customization',
                'Multi-step form structure'
            ],
            expectedOutput: {
                requiredElements: ['form', 'input', 'fieldset'],
                attributes: ['pattern', 'required', 'novalidate'],
                description: 'Must contain advanced form validation'
            }
        },
        {
            id: 25,
            title: 'Internationalization (i18n)',
            description: 'Implement internationalization features in HTML.',
            difficulty: 'hard',
            requirements: [
                'Lang attributes for different languages',
                'Dir attributes for text direction',
                'Time and date localization',
                'Cultural adaptation elements'
            ],
            expectedOutput: {
                attributes: ['lang', 'dir', 'translate'],
                description: 'Must contain internationalization attributes'
            }
        },
        {
            id: 26,
            title: 'Advanced Media Queries',
            description: 'Use HTML with advanced responsive design techniques.',
            difficulty: 'hard',
            requirements: [
                'Picture element with complex media queries',
                'Source elements with multiple conditions',
                'Art direction implementation',
                'Device pixel ratio handling'
            ],
            expectedOutput: {
                requiredElements: ['picture', 'source', 'img'],
                attributes: ['media', 'srcset', 'sizes'],
                description: 'Must contain advanced responsive media implementation'
            }
        },
        {
            id: 27,
            title: 'Web Workers Integration',
            description: 'Prepare HTML for web workers and background processing.',
            difficulty: 'hard',
            requirements: [
                'Script elements for worker files',
                'Data transfer elements',
                'Progress indicators',
                'Error handling structure'
            ],
            expectedOutput: {
                requiredElements: ['script', 'progress'],
                description: 'Must contain web worker integration setup'
            }
        },
        {
            id: 28,
            title: 'Advanced Animation Setup',
            description: 'Create HTML structure for complex animations.',
            difficulty: 'hard',
            requirements: [
                'CSS animation classes setup',
                'Intersection observer targets',
                'Animation trigger elements',
                'Performance-optimized structure'
            ],
            expectedOutput: {
                attributes: ['class', 'data-animate'],
                description: 'Must contain animation-ready HTML structure'
            }
        },
        {
            id: 29,
            title: 'Modern Layout Techniques',
            description: 'Implement modern CSS Grid and Flexbox layouts.',
            difficulty: 'hard',
            requirements: [
                'CSS Grid container setup',
                'Flexbox layout structure',
                'Responsive grid areas',
                'Modern layout patterns'
            ],
            expectedOutput: {
                requiredElements: ['div', 'section'],
                attributes: ['class'],
                description: 'Must contain modern layout structure'
            }
        },
        {
            id: 30,
            title: 'Complete Web Application',
            description: 'Build a complete HTML structure for a modern web application.',
            difficulty: 'hard',
            requirements: [
                'Complete semantic HTML structure',
                'All accessibility features',
                'Performance optimizations',
                'Modern web standards compliance',
                'Progressive enhancement ready'
            ],
            expectedOutput: {
                validation: true,
                requiredElements: ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'],
                description: 'Must be a complete, modern web application structure'
            }
        }
    ]
};

// Progress tracking
let taskProgress = JSON.parse(localStorage.getItem('taskProgress')) || {};
let currentTask = null;

// DOM elements
let taskModal, successModal, certificateModal, codeEditor, previewFrame, validationResult, previewStatus;

// Make openTaskModal globally available
window.openTaskModal = function(taskId) {
    console.log('Opening task modal for task:', taskId);
    
    // Find the task in the data
    currentTask = null;
    Object.values(tasksData).forEach(section => {
        const task = section.find(t => t.id === taskId);
        if (task) {
            currentTask = task;
        }
    });
    
    if (!currentTask) {
        console.error('Task not found:', taskId);
        alert('Error: Task not found. Please try again.');
        return;
    }
    
    console.log('Found task:', currentTask);
    
    // Verify modal exists
    if (!taskModal) {
        console.error('Task modal element not found');
        alert('Error: Modal not found. Please check the page structure.');
        return;
    }
    
    // Update modal content
    const modalTaskTitle = document.getElementById('modal-task-title');
    const modalTaskDescription = document.getElementById('modal-task-description');
    const requirementsDiv = document.getElementById('task-requirements');
    
    if (modalTaskTitle) {
        modalTaskTitle.textContent = `Task ${currentTask.id}: ${currentTask.title}`;
    } else {
        console.error('Modal task title element not found');
    }
    
    if (modalTaskDescription) {
        modalTaskDescription.textContent = currentTask.description;
    } else {
        console.error('Modal task description element not found');
    }
    
    // Show requirements
    if (requirementsDiv && currentTask.requirements) {
        requirementsDiv.innerHTML = `
            <h4>Requirements:</h4>
            <ul>
                ${currentTask.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        `;
    } else {
        console.error('Task requirements element not found or no requirements');
    }
    
    // Clear editor
    if (codeEditor) {
        codeEditor.value = '';
    } else {
        console.error('Code editor element not found');
    }
    
    // Clear preview and validation
    if (previewFrame) {
        previewFrame.src = 'about:blank';
    } else {
        console.error('Preview frame element not found');
    }
    
    if (validationResult) {
        validationResult.classList.remove('show');
    } else {
        console.error('Validation result element not found');
    }
    
    updatePreviewStatus('ready', 'Ready');
    
    // Show modal
    taskModal.classList.add('active');
    
    // Focus on code editor after a small delay
    setTimeout(() => {
        if (codeEditor) {
            codeEditor.focus();
        }
    }, 100);
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize DOM elements
    taskModal = document.getElementById('task-modal');
    successModal = document.getElementById('success-modal');
    certificateModal = document.getElementById('certificate-modal');
    codeEditor = document.getElementById('code-editor');
    previewFrame = document.getElementById('preview-frame');
    validationResult = document.getElementById('validation-result');
    previewStatus = document.getElementById('preview-status');
    
    // Check if all required elements exist
    if (!taskModal) console.error('Task modal not found');
    if (!codeEditor) console.error('Code editor not found');
    if (!previewFrame) console.error('Preview frame not found');
    
    initializeApp();
    setupEventListeners();
    renderTasks();
    updateProgress();
    updateCertificateSection();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            document.body.classList.add('dark-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            
            if (themeIcon) {
                if (isDark) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            }
        });
    } else {
        console.warn('Theme toggle element not found');
    }
    
    // Back button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    } else {
        console.warn('Back button element not found');
    }
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.task-section').forEach(section => {
        observer.observe(section);
    });
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    // Modal overlay clicks
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
    });
    
    // Editor buttons (desktop)
    const compileBtn = document.getElementById('compile-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    if (compileBtn) compileBtn.addEventListener('click', compileCode);
    if (submitBtn) submitBtn.addEventListener('click', submitCode);
    if (resetBtn) resetBtn.addEventListener('click', resetCode);
    
    // Mobile action buttons
    const mobileCompileBtn = document.getElementById('mobile-compile-btn');
    const mobileSubmitBtn = document.getElementById('mobile-submit-btn');
    const mobileResetBtn = document.getElementById('mobile-reset-btn');
    
    if (mobileCompileBtn) mobileCompileBtn.addEventListener('click', compileCode);
    if (mobileSubmitBtn) mobileSubmitBtn.addEventListener('click', submitCode);
    if (mobileResetBtn) mobileResetBtn.addEventListener('click', resetCode);
    
    // Success modal continue button
    const successContinueBtn = document.getElementById('success-continue');
    if (successContinueBtn) {
        successContinueBtn.addEventListener('click', () => {
            closeModal();
            setTimeout(() => {
                scrollToNextTask();
            }, 300);
        });
    }
    
    // Certificate buttons
    const certificateBtn = document.getElementById('certificate-button');
    const previewCertBtn = document.getElementById('preview-certificate');
    const certModalCloseBtn = document.getElementById('certificate-modal-close');
    
    if (certificateBtn) certificateBtn.addEventListener('click', openCertificateModal);
    if (previewCertBtn) previewCertBtn.addEventListener('click', previewCertificate);
    if (certModalCloseBtn) certModalCloseBtn.addEventListener('click', closeModal);
    
    // Download buttons
    const downloadPdfBtn = document.getElementById('download-pdf');
    const downloadImageBtn = document.getElementById('download-image');
    
    if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', downloadCertificateAsPDF);
    if (downloadImageBtn) downloadImageBtn.addEventListener('click', downloadCertificateAsImage);
    
    // Real-time preview
    if (codeEditor) {
        codeEditor.addEventListener('input', debounce(updatePreview, 500));
    }
}

function renderTasks() {
    console.log('Rendering tasks...');
    
    Object.keys(tasksData).forEach(section => {
        const container = document.getElementById(`${section}-tasks`);
        if (!container) {
            console.error(`Container not found for section: ${section}`);
            return;
        }
        
        const tasks = tasksData[section];
        
        container.innerHTML = tasks.map(task => `
            <div class="task-card" data-task-id="${task.id}">
                <div class="task-header">
                    <span class="task-number">Task ${task.id}</span>
                    <span class="task-status">${taskProgress[task.id] ? '✅' : ''}</span>
                </div>
                <h3 class="task-title">${task.title}</h3>
                <p class="task-description">${task.description}</p>
                <span class="task-difficulty difficulty-${task.difficulty}">${task.difficulty}</span>
                <div class="task-actions">
                    <button class="start-task-btn ${taskProgress[task.id] ? 'completed' : ''}" 
                            onclick="openTaskModal(${task.id})" type="button">
                        <i class="fas fa-${taskProgress[task.id] ? 'eye' : 'play'}"></i>
                        ${taskProgress[task.id] ? 'Review' : 'Start Task'}
                    </button>
                </div>
            </div>
        `).join('');
    });
    
    console.log('Tasks rendered successfully');
}

function closeModal() {
    console.log('Closing modal...');
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
    currentTask = null;
}

function compileCode() {
    console.log('Compiling code...');
    if (!codeEditor) {
        console.error('Code editor not available');
        return;
    }
    
    const code = codeEditor.value.trim();
    
    if (!code) {
        showValidationResult(false, 'Please write some HTML code first.');
        return;
    }
    
    updatePreview();
    showValidationResult(true, 'Code compiled successfully! Check the preview.');
}

function updatePreview() {
    if (!codeEditor || !previewFrame) {
        console.error('Editor or preview frame not available');
        return;
    }
    
    const code = codeEditor.value.trim();
    
    if (!code) {
        previewFrame.src = 'about:blank';
        updatePreviewStatus('ready', 'Ready');
        return;
    }
    
    try {
        // Create a blob URL for the HTML content
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
        
        // Clean up the blob URL after a delay
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        
        updatePreviewStatus('success', 'Preview Updated');
    } catch (error) {
        console.error('Preview error:', error);
        updatePreviewStatus('error', 'Preview Error');
    }
}

function updatePreviewStatus(type, text) {
    if (!previewStatus) return;
    
    const indicator = previewStatus.querySelector('.status-indicator');
    const statusText = previewStatus.querySelector('.status-text');
    
    if (indicator) indicator.className = `status-indicator ${type}`;
    if (statusText) statusText.textContent = text;
}

function submitCode() {
    console.log('Submitting code...');
    if (!codeEditor) {
        console.error('Code editor not available');
        return;
    }
    
    const code = codeEditor.value.trim();
    
    if (!code) {
        showValidationResult(false, 'Please write some HTML code first.');
        return;
    }
    
    if (!currentTask) {
        console.error('No current task');
        return;
    }
    
    // Show validation in progress
    showValidationResult(true, 'Validating your code...');
    
    // Simulate validation delay for better UX
    setTimeout(() => {
        const validation = validateCode(code, currentTask.expectedOutput);
        
        if (validation.isValid) {
            // Mark task as completed
            taskProgress[currentTask.id] = true;
            localStorage.setItem('taskProgress', JSON.stringify(taskProgress));
            
            // Update UI
            updateProgress();
            updateCertificateSection();
            renderTasks();
            
            // Show success modal with stats
            showSuccessModal();
            closeModal();
        } else {
            showValidationResult(false, validation.message);
        }
    }, 1000);
}

function resetCode() {
    console.log('Resetting code...');
    if (!codeEditor || !previewFrame || !validationResult) return;
    
    codeEditor.value = '';
    previewFrame.src = 'about:blank';
    validationResult.classList.remove('show');
    updatePreviewStatus('ready', 'Ready');
}

function validateCode(userCode, expectedOutput) {
    const cleanCode = userCode.toLowerCase().replace(/\s+/g, ' ').trim();
    
    // Check for required elements
    if (expectedOutput.requiredElements) {
        const missingElements = expectedOutput.requiredElements.filter(element => {
            if (element === '!DOCTYPE') {
                return !cleanCode.includes('<!doctype');
            }
            return !cleanCode.includes(`<${element.toLowerCase()}`);
        });
        
        if (missingElements.length > 0) {
            return {
                isValid: false,
                message: `Missing required elements: ${missingElements.join(', ')}`
            };
        }
    }
    
    // Check for required attributes
    if (expectedOutput.attributes) {
        const missingAttributes = expectedOutput.attributes.filter(attr => {
            if (attr.endsWith('-')) {
                return !cleanCode.includes(attr.toLowerCase());
            }
            return !cleanCode.includes(`${attr.toLowerCase()}=`);
        });
        
        if (missingAttributes.length > 0) {
            return {
                isValid: false,
                message: `Missing required attributes: ${missingAttributes.join(', ')}`
            };
        }
    }
    
    // Basic HTML validation
    if (expectedOutput.validation) {
        const hasDoctype = cleanCode.includes('<!doctype');
        const hasHtml = cleanCode.includes('<html') && cleanCode.includes('</html>');
        const hasHead = cleanCode.includes('<head') && cleanCode.includes('</head>');
        const hasBody = cleanCode.includes('<body') && cleanCode.includes('</body>');
        
        if (!hasDoctype || !hasHtml || !hasHead || !hasBody) {
            return {
                isValid: false,
                message: 'Invalid HTML structure. Make sure you have DOCTYPE, html, head, and body tags.'
            };
        }
    }
    
    return {
        isValid: true,
        message: 'Excellent! Your code meets all the requirements.'
    };
}

function showValidationResult(isSuccess, message) {
    if (!validationResult) return;
    
    validationResult.className = `validation-result show ${isSuccess ? 'validation-success' : 'validation-error'}`;
    validationResult.innerHTML = `
        <h4>${isSuccess ? '✅ Success!' : '❌ Validation Failed'}</h4>
        <p>${message}</p>
    `;
}

function showSuccessModal() {
    if (!currentTask || !successModal) return;
    
    const completedTasks = Object.keys(taskProgress).filter(id => taskProgress[id]).length;
    const totalTasks = 30;
    const percentage = Math.round((completedTasks / totalTasks) * 100);
    
    const successMessage = document.getElementById('success-message');
    const successStats = document.getElementById('success-stats');
    
    if (successMessage) {
        successMessage.textContent = `Task ${currentTask.id} completed successfully!`;
    }
    
    if (successStats) {
        successStats.innerHTML = `
            <p><strong>Progress:</strong> ${completedTasks}/${totalTasks} tasks completed</p>
            <p><strong>Overall Progress:</strong> ${percentage}%</p>
            <p><strong>Keep it up!</strong> ${totalTasks - completedTasks} tasks remaining</p>
        `;
    }
    
    setTimeout(() => {
        successModal.classList.add('active');
    }, 300);
}

function updateProgress() {
    const completedTasks = Object.keys(taskProgress).filter(id => taskProgress[id]).length;
    const totalTasks = 30;
    const percentage = Math.round((completedTasks / totalTasks) * 100);
    
    // Update main progress
    const completedTasksEl = document.getElementById('completed-tasks');
    const totalTasksEl = document.getElementById('total-tasks');
    const mainProgress = document.getElementById('main-progress');
    const progressPercentage = document.getElementById('progress-percentage');
    
    if (completedTasksEl) completedTasksEl.textContent = completedTasks;
    if (totalTasksEl) totalTasksEl.textContent = totalTasks;
    if (mainProgress) mainProgress.style.width = `${percentage}%`;
    if (progressPercentage) progressPercentage.textContent = `${percentage}%`;
    
    // Update section progress
    updateSectionProgress('beginner', 1, 10);
    updateSectionProgress('intermediate', 11, 20);
    updateSectionProgress('advanced', 21, 30);
}

function updateSectionProgress(section, startId, endId) {
    let completed = 0;
    for (let i = startId; i <= endId; i++) {
        if (taskProgress[i]) completed++;
    }
    const sectionCompleted = document.getElementById(`${section}-completed`);
    if (sectionCompleted) {
        sectionCompleted.textContent = completed;
    }
}

function updateCertificateSection() {
    const completedTasks = Object.keys(taskProgress).filter(id => taskProgress[id]).length;
    const totalTasks = 30;
    const isUnlocked = completedTasks === totalTasks;
    
    const certificateSection = document.getElementById('certificate-section');
    const certificateIcon = document.getElementById('certificate-lock');
    const certificateTitle = document.getElementById('certificate-title');
    const certificateDescription = document.getElementById('certificate-description');
    const certificateButton = document.getElementById('certificate-button');
    
    if (isUnlocked) {
        if (certificateSection) certificateSection.classList.add('unlocked');
        if (certificateIcon) certificateIcon.className = 'fas fa-unlock';
        if (certificateTitle) certificateTitle.textContent = 'Certificate Unlocked!';
        if (certificateDescription) certificateDescription.textContent = 'Congratulations! You have completed all HTML learning tasks.';
        if (certificateButton) certificateButton.classList.remove('disabled');
    } else {
        if (certificateSection) certificateSection.classList.remove('unlocked');
        if (certificateIcon) certificateIcon.className = 'fas fa-lock';
        if (certificateTitle) certificateTitle.textContent = 'Certificate Locked';
        if (certificateDescription) certificateDescription.textContent = `Complete all ${totalTasks} tasks to unlock your certificate of completion.`;
        if (certificateButton) certificateButton.classList.add('disabled');
    }
}

function scrollToNextTask() {
    const completedTasks = Object.keys(taskProgress).filter(id => taskProgress[id]).length;
    const nextTaskId = completedTasks + 1;
    
    if (nextTaskId <= 30) {
        const nextTaskCard = document.querySelector(`[data-task-id="${nextTaskId}"]`);
        if (nextTaskCard) {
            nextTaskCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            nextTaskCard.style.animation = 'pulse 2s ease-in-out';
        }
    }
}

function openCertificateModal() {
    const completedTasks = Object.keys(taskProgress).filter(id => taskProgress[id]).length;
    if (completedTasks < 30) return;
    
    if (certificateModal) {
        certificateModal.classList.add('active');
        const studentNameInput = document.getElementById('student-name');
        if (studentNameInput) {
            studentNameInput.focus();
        }
    }
}

function previewCertificate() {
    const studentNameInput = document.getElementById('student-name');
    if (!studentNameInput) return;
    
    const studentName = studentNameInput.value.trim();
    
    if (!studentName) {
        alert('Please enter your name first.');
        return;
    }
    
    // Hide form and show preview
    const certificateForm = document.getElementById('certificate-form');
    const certificatePreview = document.getElementById('certificate-preview');
    
    if (certificateForm) certificateForm.style.display = 'none';
    if (certificatePreview) certificatePreview.style.display = 'block';
    
    // Update certificate with student name
    const studentNameDisplay = document.getElementById('student-name-display');
    const completionDate = document.getElementById('completion-date');
    
    if (studentNameDisplay) studentNameDisplay.textContent = studentName;
    if (completionDate) completionDate.textContent = new Date().toLocaleDateString();
}

function downloadCertificateAsPDF() {
    alert('PDF download functionality would be implemented here using libraries like jsPDF or html2canvas.');
}

function downloadCertificateAsImage() {
    alert('Image download functionality would be implemented here using html2canvas.');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    
    if (taskModal && taskModal.classList.contains('active')) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    compileCode();
                    break;
                case 's':
                    e.preventDefault();
                    submitCode();
                    break;
                case 'r':
                    e.preventDefault();
                    resetCode();
                    break;
            }
        }
    }
});

// Debug function to check if everything is loaded
console.log('Tasks.js loaded successfully');
console.log('Tasks data:', tasksData);