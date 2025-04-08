
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom color palette
                'beige': '#F5EDE2',
                'wood-brown': '#8B5E3C',
                'fire-orange': '#D35400',
                'moss-green': '#2E5339',
                'ochre': '#C99A6B',
                'burnt-brown': '#5A2E0C',
                // Fogón custom colors
                fogon: {
                    cream: "#F9F7F2",
                    dark: "#4F4941",
                    amber: "#D1754F",
                    ember: "#C85C3E",
                    red: "#9C5446",
                    paper: "#F6F3EC",
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'ember-glow': {
                    '0%, 100%': {
                        opacity: '0.4',
                        transform: 'scale(0.98)'
                    },
                    '50%': {
                        opacity: '0.7',
                        transform: 'scale(1)'
                    }
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'paper-wave': {
                    '0%, 100%': {
                        borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%'
                    },
                    '50%': {
                        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'ember-glow': 'ember-glow 4s ease-in-out infinite',
                'fade-in': 'fade-in 0.3s ease-out',
                'paper-wave': 'paper-wave 8s ease-in-out infinite'
			},
            backgroundImage: {
                'campfire-gradient': 'linear-gradient(to top, #F5EDE2 0%, #EBE5D9 100%)',
                'ember-gradient': 'radial-gradient(circle, rgba(211,84,0,0.15) 0%, rgba(90,46,12,0) 70%)',
                'paper-texture': 'url("/textures/paper-texture.png")',
                'starry-night-gradient': 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%), url("/lovable-uploads/c21d5c2b-3172-4b49-849f-9628f55f63cc.png")'
            },
            fontFamily: {
                'serif': ['Cormorant Garamond', 'serif'],
                'handwritten': ['Pangolin', 'cursive'],
                'sans': ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'amber': '0 4px 15px -3px rgba(211, 84, 0, 0.3)',
                'paper': '0 2px 10px -2px rgba(90, 46, 12, 0.1)'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
