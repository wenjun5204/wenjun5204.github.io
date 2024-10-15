/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
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
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            gradientColorStops: () => ({
                'base-g-start': '#E7FFFB', // 主渐变色起始值
                'base-g-end': '#F9EFFF', // 主渐变色截止值
                'go-g-start': '#21D4FD', // 主题色起始值
                'go-g-end': '#B721FF', // 主题色截止值
                'highlight-g-start': '#FF277C', // 高亮渐变色起始值
                'highlight-g-end': '#FF8055', // 高亮渐变色截止值
                'super-g-start': '#FF694A', // 超神渐变色起始值
                'super-g-end': '#FFA54A', // 超神渐变色截止值
                'king-g-start': '#F25CCD', // 欧皇渐变色起始值
                'king-g-end': '#F686FD', // 欧皇渐变色截止值
                'hide-g-start': '#678FFF', // 隐藏款渐变色起始值
                'hide-g-end': '#78BCFF', // 隐藏款渐变色截止值
                'normal-g-start': '#58CCCD', // 普通款渐变色起始值
                'normal-g-end': '#58CDB1', // 普通款渐变色截止值
            }),
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
