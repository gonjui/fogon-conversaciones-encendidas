
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
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
                'fade-out': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    }
                },
                'card-flip': {
                    '0%': {
                        transform: 'rotateY(0deg)'
                    },
                    '100%': {
                        transform: 'rotateY(180deg)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'ember-glow': 'ember-glow 4s ease-in-out infinite',
                'fade-in': 'fade-in 0.3s ease-out',
                'fade-out': 'fade-out 0.3s ease-out',
                'card-flip': 'card-flip 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite'
			},
            backgroundImage: {
                'campfire-gradient': 'linear-gradient(to top, #F6F3EC 0%, #EBE5D9 100%)',
                'ember-gradient': 'radial-gradient(circle, rgba(209,117,79,0.15) 0%, rgba(200,92,62,0) 70%)',
                'card-gradient': 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)'
            },
            fontFamily: {
                'serif': ['Cormorant Garamond', 'serif'],
                'handwritten': ['Pangolin', 'cursive'],
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
