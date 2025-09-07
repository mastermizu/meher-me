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
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'source-sans-pro': ['Source Sans Pro', 'Inter', 'system-ui', 'sans-serif'],
				'monaco': ['Monaco', 'Courier New', 'monospace'],
				'courier': ['Courier New', 'Monaco', 'monospace'],
				'sans': ['Source Sans Pro', 'Inter', 'system-ui', 'sans-serif'],
			},
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
				// HubSpot Design System Colors
				'hubspot-orange': 'hsl(var(--hubspot-orange))',
				'professional-navy': 'hsl(var(--professional-navy))',
				'clean-white': 'hsl(var(--clean-white))',
				'light-gray': 'hsl(var(--light-gray))',
				'blue-gray': 'hsl(var(--blue-gray))',
				'growth-teal': 'hsl(var(--growth-teal))',
				'hubspot-blue': 'hsl(var(--hubspot-blue))',
				'hubspot-purple': 'hsl(var(--hubspot-purple))',
				'mailchimp-yellow': 'hsl(var(--mailchimp-yellow))',
				'mailchimp-dark': 'hsl(var(--mailchimp-dark))'
			},
			borderRadius: {
				lg: 'var(--radius-card)',
				md: 'var(--radius-button)',
				sm: 'var(--radius-small)',
				'hubspot-card': '0.5rem',
				'hubspot-button': '0.375rem'
			},
			spacing: {
				'hubspot-xs': 'var(--spacing-xs)',
				'hubspot-sm': 'var(--spacing-sm)',
				'hubspot-md': 'var(--spacing-md)',
				'hubspot-lg': 'var(--spacing-lg)',
				'hubspot-xl': 'var(--spacing-xl)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
