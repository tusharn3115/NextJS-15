
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


## CSR / SSR ->

- csr - client side rendering
- ssr - server side rendering
##### CSR (Client Side Rendering) -> 
- the pages are rendered in the browser
- when to use client side rendering -
	- for dynamic web pages that doesn't need seo
	- when the data is not needed to be fetched on every request
- in nextjs whenever a page is csr we need to use a directive "use client" at the top of the file to let nextjs know that this file is to be use client side rendering because every file in nextjs is by default server side rendering (ssr)
- - **Pros**: 
	✅ Faster initial load (for static content).  
    ✅ Good for highly interactive pages.  
- **Cons**: 
	❌ Slower time-to-content (fetching happens on the client).  
    ❌ Bad for SEO (content is loaded after JavaScript execution).

##### SSR (Server Side Rendering) ->
- The page is rendered on the server on every request, and the HTML is sent fully populated i.e when the html page is fully loaded then only the page is sent
- when to use server side rendering -
	- when seo is required
	- when frequent updation of data is needed
	- when you want dynamic content but don't want it to load at client side
- - **Pros**: 
	✅ Fresh data on every request.  
    ✅ Great for SEO.  
    ✅ No need to fetch data on the client side.
    
- **Cons**: 
	❌ Slower than CSR (server must generate page for every request).  
    ❌ Increases server load.


## Server Actions ->

- server actions allows use to run server-side logic without creating a separate api route
- we can directly call a server function from a react component
- key benefits : 
	1. no need for api routes
	2. improved performance 
	3. direct access to database and backend logics 
	4. works on both client and server side components
	5. secure

* * Note you cannot create an inline server action inside a client-side component or in the file where you have used "use client" directive


## Dynamic Routes / Slug

- dynamic routes are created where the URL can changed dynamically based on parameters
- we can create dynamic routes by adding square brackets `[param]` inside page directory
