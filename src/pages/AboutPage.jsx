

// About Page
// Hufana

const AboutPage = () => {
    return (
        <div className="flex justify-between">
            <div className="flex-1">
                <div className="px-9 py-20 flex flex-col space-y-8">
                    <span className="text-red-500 font-light uppercase tracking-widest">
                        about us
                    </span>

                    <div className="font-bold text-5xl leading-tight">
                        <p>Find</p>
                        <p>Your <span className="text-red-500">Perfect</span></p>
                        <p>Style, Every</p>
                        <p>Day</p>
                    </div>


                    <p className="leading-tight max-w-sm">
                        We're a one-stop destination for premium porducts
                        accross beauty, fashion, electronics, and more.
                        Discover comfort, quality, and UV protection — all
                        designed for modern living.
                    </p>


                    <div className="flex space-x-5">
                        <span>
                            <h1 className="text-4xl font-bold">50+</h1>
                            <p className="font-light">Products</p>
                        </span>
                        <span>
                            <h1 className="text-4xl font-bold">5</h1>
                            <p className="font-light">Categories</p>
                        </span>
                        <span>
                            <h1 className="text-4xl font-bold flex items-center gap-1">
                                4.6
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </h1>
                            <p className="font-light">Avg Rating</p>
                        </span>
                    </div>

                    <button className="bg-zinc-100 text-black px-3 py-1 text-sm border border-zinc-200 rounded-md hover:bg-zinc-50">
                        Explore Collection
                    </button>
                </div>

            </div>

            <div className="flex-1">
                {/* dito yung image */}

                <div className="bg-zinc-500 flex-1 min-h-screen text-center text-white">
                    <p className="text-center">Place holder ito</p>
                </div>
            </div>

        </div>
    )
}


export default AboutPage;