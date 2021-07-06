import Head from 'next/head'
import React, { useState, useEffect } from 'react'


const Home = (props) => {
    const [openFilters, setOpenFilters] = useState(false)
    const { startups } = props
    const formatCash = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-2">
            <Head>
                <title>MicroAcquire</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-full max-w-screen-xl">
                <header className="flex flex-auto flex-wrap items-center gap-6 p-6">
                    <div id="logo" className="font-semibold font-mono uppercase leading-none text-lg mx-3">MicroAcquire</div>
                    <nav className="flex flex-wrap flex-auto flex-row gap-6 text-sm">
                        <ul className="list-none flex flex-auto flex-wrap flex-row gap-6">
                            <li>
                                <a href="/" className="flex flex-row gap-2 items-center justify-center">
                                    <span className="w-4 h-4 bg-red-200 rounded"></span>
                                    <span>Marketplace</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="flex flex-row gap-2 items-center justify-center">
                                    <span className="w-4 h-4 bg-yellow-200 rounded"></span>
                                    <span>Outcome requests</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="flex flex-row gap-2 items-center justify-center">
                                    <span className="w-4 h-4 bg-pink-200 rounded"></span>
                                    <span>Resources &#8250;</span>
                                </a>
                            </li>
                        </ul>
                        <div id="nav_right">
                            <ul className="list-none">
                                <li>
                                    <a href="/" className="flex flex-row gap-2 items-center justify-center">
                                        <span className="w-4 h-4 bg-gray-400 rounded"></span>
                                        <span>Joachim &#8250;</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className="grid sm:grid-cols-5 w-full p-2 text-center min-h-screen gap-3">
                    <aside className="h-full bg-white text-left justify-start rounded-lg sm:col-span:5 md:col-span-1 p-3 max-h-screen flex flex-col gap-3 mb-6 md:mb-0">
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Description:</small>
                            <div className="grid grid-cols-2 w-full gap-3">
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="saas" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="saas" className="text-gray-700 text-sm">SaaS</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="ecommerce" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="ecommerce" className="text-gray-700 text-sm">eCommerce</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="marketplace" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="marketplace" className="text-gray-700 text-sm">Marketplace</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="shopify" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="shopify" className="text-gray-700 text-sm">Shopify</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="mobile" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="mobile" className="text-gray-700 text-sm">Mobile</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="crypto" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="crypto" className="text-gray-700 text-sm">Crypto</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="dtc" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="dtc" className="text-gray-700 text-sm">DTC</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="micro-saas" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="micro-saas" className="text-gray-700 text-sm">Micro-SaaS</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="other" className="border border-gray-300 text-blue-600 rounded" defaultChecked type="checkbox" />
                                    <label htmlFor="other" className="text-gray-700 text-sm">Other</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="agency" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label htmlFor="agency" className="text-gray-700 text-sm">Agency</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Asking price:</small>
                            <div className="grid grid-cols-2 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <input name="pricef" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-blue-600 rounded" type="text" placeholder="0" />
                                </div>
                                <div className="col-span-1 gap-1">
                                    <input name="pricet" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-blue-600 rounded" type="text" placeholder="1,000,000" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Annual recurring revenue:</small>
                            <div className="grid grid-cols-2 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <input name="arrf" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-blue-600 rounded" type="text" placeholder="0" />
                                </div>
                                <div className="col-span-1 gap-1">
                                    <input name="arrt" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-blue-600 rounded" type="text" placeholder="1,000,000" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Annual profit:</small>
                            <div className="grid grid-cols-2 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <input name="aprf" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-blue-600 rounded" type="text" placeholder="0" />
                                </div>
                                <div className="col-span-1 gap-1">
                                    <input name="aprt" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-blue-600 rounded" type="text" placeholder="1,000,000" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Startup age:</small>
                            <input type="range" list="stpage" className="text-blue-600 bg-blue-600 range" />
                            <datalist className="hidden" id="stpage">
                                <option value="0 months" label="0 months"></option>
                                <option value="1-6 months" label="1-6 months"></option>
                                <option value="7 months - 1 year" label="7 months - 1 year"></option>
                                <option value="1-3 years" label="1-3 years"></option>
                                <option value="4-6 years" label="4-6 years"></option>
                                <option value="7-10 years" label="7-10 years"></option>
                                <option value="10-14 years" label="10-14 years"></option>
                                <option value="14-19 years" label="14-19 years"></option>
                                <option value="20+ years" label="20+ years"></option>
                            </datalist>
                            <div className="flex flex-row items-center justify-between w-full gap-3">
                                <p className="text-sm leading-none">0 months</p>
                                <p className="text-sm leading-none">20+ years</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Number of customers:</small>
                            <div className="grid grid-cols-1 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <select name="ncust" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-gray-600 rounded">
                                        <option>All</option>
                                        <option>10 - 100</option>
                                        <option>100 - 1,000</option>
                                        <option>1,000 - 10,000</option>
                                        <option>10,000 - 100,000</option>
                                        <option>More than 100,000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Metrics included:</small>
                            <div className="grid grid-cols-1 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <select name="metr" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-gray-600 rounded">
                                        <option>All</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Open to offers:</small>
                            <div className="grid grid-cols-1 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <select name="otoff" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-gray-600 rounded">
                                        <option>All</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Startup listing:</small>
                            <div className="grid grid-cols-1 w-full gap-3">
                                <div className="col-span-1 gap-1">
                                    <select name="sttype" className="w-full text-sm placeholder-gray-400 font-semibold border border-dashed border-gray-400 text-gray-600 rounded">
                                        <option>All</option>
                                        <option>Premium startups</option>
                                        <option>Non-premium startups</option>
                                        <option>Favourites</option>
                                        <option>Funding available</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div id="content" className="sm:col-span-5 md:col-span-4 text-left flex flex-col p-3 gap-5">
                        {(startups && startups.length > 0) ? startups.map(st => (
                            <div key={st.id} className="p-7 bg-gray-100 rounded border border-dashed border-gray-300 flex flex-col md:flex-row md:justify-evenly md:divide-x-2 md:divide-gray-300 hover:border-solid hover:bg-white">
                                <section id={st.id + "_basics"} className="flex flex-col p-3 gap-4 w-full">
                                    <div className="flex flex-col md:flex-row gap-1 items-center justify-between">
                                        <div>
                                            <h2 className="font-display text-black font-bold leading-none tracking-tight">{st.name}</h2>
                                            <small className="text-xs text-gray-400 font-display leading-none">{st.url}</small>
                                        </div>
                                        <div className="border border-blue-400 text-blue-600 items-center justify-between bg-white font-semibold px-5 py-3 rounded flex flex-row gap-2 sm:text-sm md:text-md leading-none">
                                            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                            <span className="">Premium startup</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-4 mb-3">
                                        <div>
                                            <small className="text-gray-500 font-display text-xs">Description:</small>
                                            <p>{st.description}</p>
                                        </div>
                                        {st.isFaved ? (
                                            <div className="text-sm text-gray-500">Added to favourites. <a href="/" className="text-gray-400 hover:text-red-600 active:underline">Remove</a></div>
                                        ) : (
                                            <a href="/" className="text-sm text-blue-600 hover:underline active:underline">Add to favourites</a>
                                        )}
                                    </div>
                                </section>
                                <section id={st.id + "_numbers"} className="flex flex-col p-3 gap-6 w-full">
                                    <div className="flex flex-row gap-1 items-center justify-center md:justify-between">
                                        {st.isOpen ? (
                                            <div className="text-blue-600 items-center justify-between bg-blue-100 font-semibold px-5 py-3 rounded flex flex-row gap-2 sm:text-sm md:text-md leading-none">
                                                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                                <span className="">Open to offers</span>
                                            </div>
                                        ) : (
                                            <div className="text-gray-500 items-center justify-between bg-gray-200 font-semibold px-5 py-3 rounded flex flex-row gap-2 sm:text-sm md:text-md leading-none">
                                                <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                                                <span className="">Not accepting offers</span>
                                            </div>
                                        )}
                                        <div></div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
                                        <div id="profit" className="col-span-1 flex flex-col items-center gap-1 mb-3">
                                            <span className="py-3 px-4 bg-blue-600 shadow-sm text-white leading-none text-sm rounded-full font-semibold"> K </span>
                                            <small className="text-gray-500 font-sans text-xs">Annual profit:</small>
                                            <p className="text-xl text-black font-normal">{formatCash.format(st.annualProfit)}</p>
                                        </div>
                                        <div id="arr" className="col-span-1 flex flex-col items-center gap-1 mb-3">
                                            <span className="py-3 px-4 bg-blue-600 shadow-sm text-white leading-none text-sm rounded-full font-semibold"> K </span>
                                            <small className="text-gray-500 font-sans text-xs">Annual recurring revenue:</small>
                                            <p className="text-xl text-black font-normal">{formatCash.format(st.annualRR)}</p>
                                        </div>
                                        <div id="customers" className="col-span-1 flex flex-col items-center gap-1 mb-3">
                                            <span className="py-3 px-4 bg-blue-600 shadow-sm text-white leading-none text-sm rounded-full font-semibold"> K </span>
                                            <small className="text-gray-500 font-sans text-xs">Number of customers:</small>
                                            <p className="text-xl text-black font-normal">{new Intl.NumberFormat('en-GB').format(st.customers)}</p>
                                        </div>
                                        <div id="founded" className="col-span-1 flex flex-col items-center gap-1 mb-3">
                                            <span className="py-3 px-4 bg-blue-600 shadow-sm text-white leading-none text-sm rounded-full font-semibold"> K </span>
                                            <small className="text-gray-500 font-sans text-xs">Date founded:</small>
                                            <p className="text-xl text-black font-normal">{st.dateFounded}</p>
                                        </div>
                                        <div id="team" className="col-span-1 flex flex-col items-center gap-1 mb-3">
                                            <span className="py-3 px-4 bg-blue-600 shadow-sm text-white leading-none text-sm rounded-full font-semibold"> K </span>
                                            <small className="text-gray-500 font-sans text-xs">Startup team:</small>
                                            <p className="text-xl text-black font-normal">{st.team}</p>
                                        </div>
                                        <div id="asking" className="col-span-1 flex flex-col items-center gap-1 mb-3">
                                            <span className="py-3 px-4 bg-blue-600 shadow-sm text-white leading-none text-sm rounded-full font-semibold"> K </span>
                                            <small className="text-gray-500 font-sans text-xs">Asking price:</small>
                                            <p className="text-xl text-black font-normal">{st.asking}</p>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        )) : (
                            <div className="w-full bg-gray-100 p-10 rounded text-xl text-center text-gray-700">No startups on offer. <a href="/" className="text-blue-600 underline">Add yours</a></div>
                        )}
                    </div>
                </main>

                <footer className="flex items-center justify-center w-full h-20 border-t">
                    <a
                        className="text-gray-400"
                        href="https://app.microacquire.com/marketplace"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The real <span className="text-gray-500">MicroAcquire</span>
                    </a>
                </footer>
            </div>
        </div>
    )
}

Home.getInitialProps = async function (context) {
    console.log("context.req ==")
    console.log(context.req.headers)
    console.log("== context.req")
    let prtcl = 'https://'
    if (
        context.req.headers.host.includes('localhost') || 
        context.req.headers.host.includes('127.0.0')
    )
        { 
            prtcl = 'http://' 
        }

    let url = (prtcl + context.req.headers.host) +'/api/startups'
    console.log("url ========== ", url)
    return fetch(url).then(r => r.json()).then(stp => {
        return { startups: stp }
    })
}
export default Home;