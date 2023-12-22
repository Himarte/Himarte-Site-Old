// // You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
// import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
// export const theme_himarte: CustomThemeConfig = {
// 	name: 'theme_himarte',
// 	properties: {
// 		// =~= Theme Properties =~=
// 		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
// 		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
// 		'--theme-font-color-base': '0 0 0',
// 		'--theme-font-color-dark': '255 255 255',
// 		'--theme-rounded-base': '9999px',
// 		'--theme-rounded-container': '16px',
// 		'--theme-border-base': '1px',
// 		// =~= Theme On-X Colors =~=
// 		'--on-primary': '255 255 255',
// 		'--on-secondary': '0 0 0',
// 		'--on-tertiary': '0 0 0',
// 		'--on-success': '0 0 0',
// 		'--on-warning': '0 0 0',
// 		'--on-error': '255 255 255',
// 		'--on-surface': '255 255 255',
// 		// =~= Theme Colors  =~=
// 		// primary | #d1540e
// 		'--color-primary-50': '248 229 219', // #f8e5db
// 		'--color-primary-100': '246 221 207', // #f6ddcf
// 		'--color-primary-200': '244 212 195', // #f4d4c3
// 		'--color-primary-300': '237 187 159', // #edbb9f
// 		'--color-primary-400': '223 135 86', // #df8756
// 		'--color-primary-500': '209 84 14', // #d1540e
// 		'--color-primary-600': '188 76 13', // #bc4c0d
// 		'--color-primary-700': '157 63 11', // #9d3f0b
// 		'--color-primary-800': '125 50 8', // #7d3208
// 		'--color-primary-900': '102 41 7', // #662907
// 		// secondary | #ffffff
// 		'--color-secondary-50': '255 255 255', // #ffffff
// 		'--color-secondary-100': '255 255 255', // #ffffff
// 		'--color-secondary-200': '255 255 255', // #ffffff
// 		'--color-secondary-300': '255 255 255', // #ffffff
// 		'--color-secondary-400': '255 255 255', // #ffffff
// 		'--color-secondary-500': '255 255 255', // #ffffff
// 		'--color-secondary-600': '230 230 230', // #e6e6e6
// 		'--color-secondary-700': '191 191 191', // #bfbfbf
// 		'--color-secondary-800': '153 153 153', // #999999
// 		'--color-secondary-900': '125 125 125', // #7d7d7d
// 		// tertiary | #0ea5e9
// 		'--color-tertiary-50': '219 242 252', // #dbf2fc
// 		'--color-tertiary-100': '207 237 251', // #cfedfb
// 		'--color-tertiary-200': '195 233 250', // #c3e9fa
// 		'--color-tertiary-300': '159 219 246', // #9fdbf6
// 		'--color-tertiary-400': '86 192 240', // #56c0f0
// 		'--color-tertiary-500': '14 165 233', // #0ea5e9
// 		'--color-tertiary-600': '13 149 210', // #0d95d2
// 		'--color-tertiary-700': '11 124 175', // #0b7caf
// 		'--color-tertiary-800': '8 99 140', // #08638c
// 		'--color-tertiary-900': '7 81 114', // #075172
// 		// success | #84cc16
// 		'--color-success-50': '237 247 220', // #edf7dc
// 		'--color-success-100': '230 245 208', // #e6f5d0
// 		'--color-success-200': '224 242 197', // #e0f2c5
// 		'--color-success-300': '206 235 162', // #ceeba2
// 		'--color-success-400': '169 219 92', // #a9db5c
// 		'--color-success-500': '132 204 22', // #84cc16
// 		'--color-success-600': '119 184 20', // #77b814
// 		'--color-success-700': '99 153 17', // #639911
// 		'--color-success-800': '79 122 13', // #4f7a0d
// 		'--color-success-900': '65 100 11', // #41640b
// 		// warning | #EAB308
// 		'--color-warning-50': '252 244 218', // #fcf4da
// 		'--color-warning-100': '251 240 206', // #fbf0ce
// 		'--color-warning-200': '250 236 193', // #faecc1
// 		'--color-warning-300': '247 225 156', // #f7e19c
// 		'--color-warning-400': '240 202 82', // #f0ca52
// 		'--color-warning-500': '234 179 8', // #EAB308
// 		'--color-warning-600': '211 161 7', // #d3a107
// 		'--color-warning-700': '176 134 6', // #b08606
// 		'--color-warning-800': '140 107 5', // #8c6b05
// 		'--color-warning-900': '115 88 4', // #735804
// 		// error | #D41976
// 		'--color-error-50': '249 221 234', // #f9ddea
// 		'--color-error-100': '246 209 228', // #f6d1e4
// 		'--color-error-200': '244 198 221', // #f4c6dd
// 		'--color-error-300': '238 163 200', // #eea3c8
// 		'--color-error-400': '225 94 159', // #e15e9f
// 		'--color-error-500': '212 25 118', // #D41976
// 		'--color-error-600': '191 23 106', // #bf176a
// 		'--color-error-700': '159 19 89', // #9f1359
// 		'--color-error-800': '127 15 71', // #7f0f47
// 		'--color-error-900': '104 12 58', // #680c3a
// 		// surface | #013da5
// 		'--color-surface-50': '217 226 242', // #d9e2f2
// 		'--color-surface-100': '204 216 237', // #ccd8ed
// 		'--color-surface-200': '192 207 233', // #c0cfe9
// 		'--color-surface-300': '153 177 219', // #99b1db
// 		'--color-surface-400': '77 119 192', // #4d77c0
// 		'--color-surface-500': '1 61 165', // #013da5
// 		'--color-surface-600': '1 55 149', // #013795
// 		'--color-surface-700': '1 46 124', // #012e7c
// 		'--color-surface-800': '1 37 99', // #012563
// 		'--color-surface-900': '0 30 81' // #001e51
// 	}
// };
// //  dark blue #161C29
