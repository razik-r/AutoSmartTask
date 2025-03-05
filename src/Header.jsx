export default function Header(){
    <header className="bg-violet-700  text-white sticky top-0 z-10">
          <section  className="max-w-4xl mx-auto flex p-4 justify-between items-center  ">
            <h1 className="text-3xl font-medium">Raptail Inc</h1>
            <div>
              <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                &#9776;
              </button>
            </div>
            <nav class="hidden sm:block space-x-8 text-xl">
              <a href="#rockets" className="hover:opacity-90">Our products</a>
              <a href="#rockets" className="hover:opacity-90">testimonals</a>
              <a href="#rockets" className="hover:opacity-90">contact us</a>
            </nav>
          </section>
        </header>
}