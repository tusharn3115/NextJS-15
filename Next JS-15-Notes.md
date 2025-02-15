
## Brief About NextJS -> 


### 1. Full-Stack Capabilities

- provide full stack capabilities 
- server-side rendering ( SSR )
- 
- static site generation ( SSG )
- API routes, enabling you to build both frontend and backend in one framework

### 2. Performance Optimization

- static site generation ( SSG )
- incremental static regeneration ( ISR ) allows us to pre-render pages for better performance
- making pages faster to load

### 3. SEO - Friendly

### 4. Developer Experience

- file based routing system, which makes it easy to create routes and manage to navigate
- built in support for typescript and eslint



## File based Routing ->

- for example we have some folders within the main folder :
	 app > signin > ...
	 - app folder will be our home routes also denoted " / " in app routing
	 - and then further we have sign_in folder so to navigate to it what we will do is just add the name of the folder after " / ", so it will be " /signin " and it will navigate to the next within folder
- in nextjs the routing is done based on the file name and we don't need any other dependencies to be installed to use routing as in react we used to install react-router-dom for routing but nextjs comes with inbuild app router
- if you were to do routing in react it would be done like this :
	![[Pasted image 20250213123403.png]]
- every folder will always contain a page.tsx / page.js file coz whenever we switch through different pages i.e. different folders like home > signin it always first loads the page.js / page.tsx file 
- if there is no page.js / page.tsx file the page won't load into our browser and will through an error


## Page & Layout ->

- layout.tsx file in NextJS is responsible for providing a consistent structure across multiple pages
- Every `page.tsx` file inside the `app/` directory first passes through `layout.tsx` before being displayed in the browser.
- The `{children}` prop inside `layout.tsx` is dynamically replaced with the actual page content.
- this is what layout.tsx looks like, children's gets dynamically replaced by page.tsx file
	 ![[Pasted image 20250214104158.png]]
- Flow of Rendering in Next.js App Router : 
	1️⃣ User requests a page (e.g., `/about`).  
	2️⃣ Next.js **first loads `layout.tsx`** from `app/layout.tsx`.  
	3️⃣ `{children}` inside `layout.tsx` gets replaced with `about/page.tsx`.  
	4️⃣ The full page is then rendered in the browser.
	
- Anything written in `layout.tsx` will be visible on every page in the **App Router (`app/` directory)** of Next.js. This is because `layout.tsx` wraps around all `page.tsx` files and persists across different routes.


## Nested Routing ->

- Nested routing allows you to create structured and hierarchical routes using folders inside the `app/` directory.
- Nested routing allows you to organize pages inside folders to create URL structures like `/dashboard/settings` or `/products/123/details`
- Each subfolder inside `app/` represents a **nested route**, and Next.js **automatically** maps them to the correct URLs.
- File Structure :
	app/
	│── layout.tsx  (Persistent Layout)
	│── page.tsx  (Home Page → `/`)
	│── dashboard/
	│   │── page.tsx  (Dashboard Page → `/dashboard`)
	│   └── settings/
	│       └── page.tsx  (Dashboard Settings → `/dashboard/settings`)



## Linking Component ->

- Link is used for client-side routing
- it enables fast, seamless navigation between pages without triggering full page reloads
- `<Link>` is a React component that extends the HTML `<a>` element to provide prefetching and client-side navigation between routes.

## Image Component ->

- image component is the `next/img` component for optimized image rendering
- it automatically handles lazy loading, responsive image and better performance compared to standard `<img>` tag