import { defineConfig } from "vite";

// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://holtonrealty.com/admin',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "https://holtonrealty.com/admin",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
