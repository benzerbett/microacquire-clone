import Head from 'next/head'

export default function Home() {
    // const startups = []
    const startups = [
        { id: "ee73a4bd-b977-40f2-abd9-b23531e52e4f", url: "http://elwin.info", name: "Cummings Systems Co", description: "Corrupti soluta iure id aliquam voluptatem ut. Ipsum cumque sequi. Ut est ipsam. Et dolores ipsam quia.", isFaved: true, isPremium: false, isOpen: false, customers: 1, annualProfit: 56443, annualRR: 42720, dateFounded: "Feb 2018", team: 3, asking: 50000 },
        { id: "457a21a0-909f-490e-a787-35915a4b2a50", url: "https://leann.net", name: "Willms Systems Co", description: "Dolorem ad illum et voluptatum et ut occaecati. Voluptatem ea quod. Quibusdam deserunt et eum dolore itaque. Ut id sint quia deleniti accusantium et non. Corrupti facere veritatis quisquam consectetur. Aut nesciunt ea aut.", isFaved: true, isPremium: false, isOpen: true, customers: 17, annualProfit: 72256, annualRR: 3034, dateFounded: "Jan 2020", team: 2, asking: 131540 },
        { id: "1ff9bf37-5215-40e7-985e-3fe9f4afc8e6", url: "https://augustus.name", name: "Murray Systems Co", description: "Ad dignissimos rem. Eum soluta iure quos accusamus inventore neque sequi ullam. Voluptatem perspiciatis ad omnis.", isFaved: false, isPremium: false, isOpen: false, customers: 13, annualProfit: 47320, annualRR: 76475, dateFounded: "Apr 2011", team: 9, asking: 639260 },
        { id: "085e18c0-526a-4906-871d-a43f366a728f", url: "http://elyse.net", name: "Jakubowski Group", description: "Ea eaque nostrum optio asperiores totam et neque incidunt fugit. Voluptatem velit iure veritatis delectus voluptatibus voluptate. Velit odit dolorum culpa nesciunt ipsam quis placeat. Nihil et laborum dolor inventore. Ut cupiditate laboriosam numquam.", isFaved: false, isPremium: false, isOpen: false, customers: 8, annualProfit: 63120, annualRR: 55508, dateFounded: "Feb 2020", team: 8, asking: 605120 },
        { id: "a0519d91-bf25-4b4c-81e7-e6d8a8d60162", url: "https://reggie.net", name: "Feeney Systems Co", description: "Quo quo corporis. Consequuntur ut odit numquam expedita saepe odit ratione reiciendis. Asperiores maiores blanditiis nihil. Quidem quod nesciunt recusandae mollitia doloremque. Magnam nulla esse.", isFaved: false, isPremium: false, isOpen: false, customers: 17, annualProfit: 71549, annualRR: 24598, dateFounded: "Sep 2010", team: 4, asking: 907250 },
        { id: "eca09368-1034-42df-8736-a5bf945ecc2a", url: "http://margaret.name", name: "Marvin, Auer and Harris", description: "Officia debitis modi consequatur omnis libero fuga nihil officia in. Aliquid deleniti itaque. Dignissimos explicabo veritatis mollitia.", isFaved: false, isPremium: true, isOpen: true, customers: 22, annualProfit: 55900, annualRR: 12206, dateFounded: "Jun 2020", team: 8, asking: 282030 },
        { id: "45e6ef9e-8769-4518-a870-421da57080bb", url: "https://dee.name", name: "Jerde, Hagenes and Hoppe", description: "Odit non earum excepturi commodi id. Fugiat ipsum aspernatur veritatis amet natus ex laudantium temporibus dolorem. Id deserunt distinctio et ea blanditiis praesentium. Quidem repellendus eius tempora doloribus. Aut fugiat cupiditate. Ut quia delectus vel nostrum. Impedit qui modi cupiditate sit.", isFaved: true, isPremium: false, isOpen: false, customers: 14, annualProfit: 92878, annualRR: 69330, dateFounded: "Jul 2020", team: 5, asking: 347820 },
        { id: "36b6856d-1a77-45b2-b482-588ff38c7d82", url: "https://shanie.org", name: "Roob and Sons", description: "Quod voluptatem ut. Modi unde provident sapiente. Sit eius qui commodi optio. Maxime magnam illo inventore non illum numquam dolorem.", isFaved: false, isPremium: true, isOpen: false, customers: 419, annualProfit: 11128, annualRR: 63433, dateFounded: "Jun 2019", team: 9, asking: 127440 },
        { id: "913a9bd1-c31c-42fa-9929-2aa97c0d719b", url: "http://tate.biz", name: "Bartoletti Capital", description: "Quas veniam ut. Dolore voluptates est aut ipsam. Architecto quia id vero mollitia enim temporibus dignissimos nesciunt impedit. Commodi rem voluptates veritatis eligendi in. Voluptatem molestias sequi laboriosam sit debitis blanditiis doloremque voluptatem.", isFaved: true, isPremium: true, isOpen: true, customers: 14, annualProfit: 47000, annualRR: 47618, dateFounded: "May 2019", team: 8, asking: 333600 },
        { id: "1b5255e9-4c7d-46a2-8189-a89b9d86cf9e", url: "https://brycen.org", name: "Kub, Hyatt and Cremin", description: "Repellat cupiditate nostrum. Nemo iure sunt voluptate maxime. Ut sint ab ipsam qui iste et. Ipsam accusantium ea iste facilis quisquam ut sed. Quia sint quis officiis laborum ipsum non.", isFaved: true, isPremium: false, isOpen: true, customers: 11, annualProfit: 46319, annualRR: 45839, dateFounded: "May 2020", team: 10, asking: 424540 },
        { id: "485e8e1e-1e3a-4063-a17f-bcb4331b2e6e", url: "http://ward.name", name: "Kris, Kirlin and O'Conner", description: "Aut eaque beatae perspiciatis deserunt dolor aspernatur. Dolor tempora adipisci eaque. Autem recusandae ullam necessitatibus amet perferendis. Temporibus et distinctio esse vel fugit ab. Qui molestiae eos.", isFaved: false, isPremium: false, isOpen: false, customers: 87, annualProfit: 27867, annualRR: 87339, dateFounded: "Dec 2020", team: 6, asking: 822090 },
        { id: "7c4d2436-2e8d-47ee-93e5-62cdb58e2a8e", url: "https://theron.net", name: "O'Conner, McDermott and Langworth", description: "Similique repudiandae ut magnam libero ducimus et ducimus. Cum sunt rerum molestiae asperiores ut debitis alias nihil iusto. Aut veniam iste occaecati cumque. Odit qui facere aspernatur non est ad sed. Dolor autem modi voluptatem et eos et quod sed.", isFaved: false, isPremium: false, isOpen: false, customers: 13, annualProfit: 47038, annualRR: 29833, dateFounded: "May 2018", team: 9, asking: 356100 },
        { id: "9bb98868-c022-45a1-9e2e-6f4d67cc8c45", url: "http://ari.com", name: "Orn Systems Co", description: "Qui quis molestiae veritatis doloribus accusamus. Est ut voluptatem quam dolores numquam veritatis nihil ducimus. Ut quia molestias est quos eum neque distinctio vel molestiae. Sunt aliquid error nemo. Non officiis sit.", isFaved: true, isPremium: true, isOpen: false, customers: 12, annualProfit: 31865, annualRR: 76946, dateFounded: "May 2020", team: 4, asking: 705220 },
        { id: "1694278c-9c02-4835-9651-944af0b2350e", url: "http://annalise.name", name: "Kub, Yundt and Rogahn", description: "Qui ut minus. Aut vel ab ut nemo possimus odio et dolorem. Minus non nemo optio. Unde culpa non vel ea voluptatibus.", isFaved: false, isPremium: true, isOpen: false, customers: 9, annualProfit: 49647, annualRR: 29766, dateFounded: "Jan 2021", team: 8, asking: 675760 },
        { id: "f69a5788-011d-467c-8f93-fe1c2c6e5ce6", url: "http://kian.org", name: "O'Kon, Mertz and Kemmer", description: "Nihil quasi id qui. Consequatur vel non. Et voluptatibus laudantium nisi doloribus et natus aut voluptatem.", isFaved: true, isPremium: true, isOpen: true, customers: 120, annualProfit: 77732, annualRR: 40531, dateFounded: "Feb 2020", team: 2, asking: 633840 },
        { id: "4dba1403-c72c-4b96-975c-9ce236903487", url: "http://alvina.org", name: "Nicolas Systems Co", description: "Ut consequatur officiis dolorum reiciendis dignissimos quibusdam et consequuntur ut. Sint ut consequatur ut voluptatem enim ut. Molestiae necessitatibus mollitia non provident eos est.", isFaved: false, isPremium: true, isOpen: true, customers: 14, annualProfit: 97142, annualRR: 69270, dateFounded: "Mar 2020", team: 8, asking: 204320 },
        { id: "1275c40c-bde4-4705-9fdc-a23533f27d7f", url: "https://oral.biz", name: "Kihn Group", description: "Nemo incidunt autem ut dolores. Nihil nihil itaque. Cumque voluptas veritatis maiores facere nesciunt quis qui ea facilis.", isFaved: false, isPremium: false, isOpen: true, customers: 27, annualProfit: 40517, annualRR: 68589, dateFounded: "Dec 2020", team: 7, asking: 474700 },
        { id: "02e3a76c-b055-4a51-befc-d39569b209e1", url: "https://kory.net", name: "Corkery, Hand and Anderson", description: "Molestiae aut occaecati enim explicabo. Suscipit sit totam reprehenderit in. Blanditiis voluptatem quo ut voluptatem nam commodi. Et voluptatem architecto non placeat ex itaque alias. Laborum eligendi impedit ducimus eum beatae provident quisquam hic quia. Omnis voluptatem distinctio sunt sed aliquam assumenda veritatis mollitia adipisci. Neque modi quidem distinctio maiores.", isFaved: true, isPremium: true, isOpen: false, customers: 12, annualProfit: 54345, annualRR: 22917, dateFounded: "Jun 2018", team: 6, asking: 641120 },
        { id: "2d3fcbd8-8c24-42e7-8080-48c8af2f7918", url: "https://alena.org", name: "Bogan, Beahan and Walter", description: "Ut tenetur blanditiis fugit quae deserunt tempora quaerat quas sint. Voluptatem pariatur sed reiciendis quas ut excepturi dicta ullam. At qui nobis et nemo nemo voluptatem qui et enim. Earum sed quo. Rerum earum aut praesentium. Unde debitis et et dolores sunt ut. Reiciendis voluptatum repellendus maiores debitis omnis.", isFaved: true, isPremium: true, isOpen: true, customers: 19, annualProfit: 59639, annualRR: 65893, dateFounded: "Apr 2015", team: 1, asking: 229250 },
        { id: "8518b255-feea-4564-9690-bd20194bd9a5", url: "http://gianni.name", name: "Lehner Inc", description: "Eius tenetur assumenda sed rerum. Dolor numquam cupiditate similique aperiam porro adipisci. Perferendis qui reiciendis nemo expedita facere cumque vero omnis omnis. Animi quae voluptatem ut nostrum. Dignissimos et beatae non. Ad sint totam est. Ut excepturi in est fugit ut asperiores nihil mollitia.", isFaved: false, isPremium: true, isOpen: true, customers: 5, annualProfit: 19977, annualRR: 92822, dateFounded: "Jun 2016", team: 9, asking: 374030 },
        { id: "7360aa38-b250-4405-a48a-9e70afa6e62a", url: "https://alene.com", name: "Lemke Systems Co", description: "Et ut explicabo rem dicta ut fugiat at. Unde tempora et perspiciatis pariatur iure quae vero et. Quo distinctio beatae odio iste. In voluptatem aut.", isFaved: true, isPremium: true, isOpen: true, customers: 13, annualProfit: 74824, annualRR: 76768, dateFounded: "Aug 2020", team: 6, asking: 67980 },
        { id: "755f2a89-49f1-4270-999f-f504063d7dbe", url: "https://lonzo.biz", name: "Kshlerin Inc", description: "Dolorum rerum in labore dignissimos non dolorem ut. Minus facere quia nam vero consequatur iste consequatur. Et qui qui numquam ullam qui perferendis qui excepturi. Sed aut ea sed eius aspernatur occaecati. Quaerat ullam voluptate rerum qui nam deserunt sunt. Nam totam et nemo neque ea quibusdam quis occaecati ut. Possimus ratione rerum possimus omnis tempora dolore iure.", isFaved: true, isPremium: false, isOpen: true, customers: 216, annualProfit: 70972, annualRR: 66894, dateFounded: "Aug 2020", team: 8, asking: 712680 },
        { id: "762490c2-d095-4dfe-b3f6-139143c7a1bf", url: "http://alexzander.name", name: "Abernathy, Mills and Hartmann", description: "Harum necessitatibus rerum vitae voluptates quibusdam non. Expedita repellendus consectetur reiciendis in repellat ut magnam neque et. Deserunt vel quia similique doloribus et modi. Dignissimos ea commodi animi voluptas eligendi ad totam modi perferendis. Quos sapiente neque aut aspernatur et ex. Velit nihil saepe tempora quae voluptas illo.", isFaved: true, isPremium: false, isOpen: true, customers: 17, annualProfit: 49419, annualRR: 88360, dateFounded: "Jul 2017", team: 3, asking: 175630 },
        { id: "de4f7677-3bc1-421b-ab09-55d29e9a5e4c", url: "https://barry.org", name: "Hickle Inc", description: "Earum non modi. Eos officiis ratione. Architecto maiores adipisci earum accusamus voluptas. Et est similique. Ipsa non occaecati id deleniti et ducimus et. In id omnis temporibus hic deleniti est iste perferendis quia.", isFaved: false, isPremium: false, isOpen: true, customers: 19, annualProfit: 33510, annualRR: 16945, dateFounded: "Nov 2020", team: 6, asking: 114340 },
        { id: "ed3d6bba-0ca7-4cc2-af5f-64d05f17d4e4", url: "http://phoebe.org", name: "Kautzer Group", description: "Quia voluptatibus inventore commodi velit. Nulla porro labore similique iure eaque vel maxime. Sint maxime provident omnis quibusdam voluptate repellendus ut ipsa non. Earum possimus nulla accusantium adipisci dicta. Unde dolorum non quia dolores a earum. Dolores voluptatibus provident.", isFaved: true, isPremium: false, isOpen: true, customers: 6090, annualProfit: 92276, annualRR: 178560, dateFounded: "Nov 2020", team: 21, asking: 442630 },
        { id: "a696f63a-abb9-45ef-a1ea-2dcbe93cd3a4", url: "http://cecile.net", name: "Mills, Keeling and Thompson", description: "Sit hic odit fugit eius blanditiis et et. Qui quam nisi vel atque repellat ut itaque. Officiis laboriosam laboriosam molestiae quod architecto. Qui laboriosam sit.", isFaved: false, isPremium: false, isOpen: true, customers: 14, annualProfit: 43728, annualRR: 98441, dateFounded: "Jun 2020", team: 1, asking: 883410 },
        { id: "7f6069f3-58a0-4f5c-9266-42d766866657", url: "https://wallace.info", name: "Kovacek and Sons", description: "Reprehenderit magnam aliquam nobis nobis magni provident enim facilis doloremque. Quae molestiae earum sed adipisci harum tempora eos. Dolor qui ut quia. Iure voluptas molestiae voluptatem atque qui. Corporis eum dicta. Unde sunt consequatur doloremque dolores ab nemo architecto eum. Necessitatibus expedita maxime.", isFaved: true, isPremium: false, isOpen: false, customers: 18, annualProfit: 85942, annualRR: 92738, dateFounded: "Mar 2021", team: 3, asking: 747340 },
        { id: "06dbad9e-2e8e-471c-9927-18205df17e9e", url: "https://madison.biz", name: "Pollich LLC", description: "Saepe est consequatur sed voluptatem facilis autem labore. Enim sequi odio in autem doloremque inventore ut eaque. Nihil repellendus vero quasi dolore ea unde debitis. Nesciunt quia iusto provident.", isFaved: true, isPremium: true, isOpen: true, customers: 1200, annualProfit: 28050, annualRR: 83869, dateFounded: "Nov 2014", team: 8, asking: 689430 },
        { id: "725d4b33-81ec-420c-9ae2-114a2d3b790b", url: "https://melissa.org", name: "Abernathy and Sons", description: "Eos voluptatem perferendis iure consequatur dignissimos. Atque enim itaque dolore. Ab vel molestiae est nisi enim laborum itaque corrupti ullam. Qui eaque et quam quo dolorem odit. Voluptatem alias assumenda quaerat sapiente. Voluptatem voluptatem debitis rerum error at cum neque cupiditate. Nesciunt expedita quis.", isFaved: true, isPremium: true, isOpen: false, customers: 3, annualProfit: 82547, annualRR: 17395, dateFounded: "Jan 2020", team: 9, asking: 567740 },
        { id: "6389ee08-7b62-4941-9866-c5d3849bfef7", url: "https://belle.net", name: "Lubowitz, Konopelski and Nienow", description: "Et odio maxime possimus. Recusandae vel magnam repellendus perferendis sed incidunt ea error. Consequatur tenetur ut odio saepe. Necessitatibus sit enim.", isFaved: true, isPremium: false, isOpen: true, customers: 48, annualProfit: 17343, annualRR: 28190, dateFounded: "Jun 2020", team: 3, asking: 648330 },
        { id: "abf909db-4844-455c-b6e1-3e6d7547b886", url: "http://lexi.com", name: "Jenkins Systems Co", description: "Est fugit voluptate ipsa necessitatibus ducimus commodi placeat qui. In rerum delectus voluptatem quibusdam nisi et similique accusamus exercitationem. Et voluptas qui rem tenetur tempora. Sit voluptatem rerum ab libero ex. Sunt eos quam nulla.", isFaved: false, isPremium: true, isOpen: true, customers: 150, annualProfit: 12000, annualRR: 20000, dateFounded: "May 2012", team: 6, asking: 310080 },
    ]
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

                <main className="grid grid-cols-5 w-full p-2 text-center min-h-screen gap-3">
                    <aside className="h-full bg-white text-left justify-start rounded-lg col-span-1 p-3 max-h-screen flex flex-col gap-3">
                        <div className="flex flex-col gap-2 p-1">
                            <small className="text-gray-500 font-sans text-xs">Description:</small>
                            <div className="grid grid-cols-2 w-full gap-3">
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="saas" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="saas" className="text-gray-700 text-sm">SaaS</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="ecommerce" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="ecommerce" className="text-gray-700 text-sm">eCommerce</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="marketplace" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="marketplace" className="text-gray-700 text-sm">Marketplace</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="shopify" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="shopify" className="text-gray-700 text-sm">Shopify</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="mobile" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="mobile" className="text-gray-700 text-sm">Mobile</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="crypto" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="crypto" className="text-gray-700 text-sm">Crypto</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="dtc" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="dtc" className="text-gray-700 text-sm">DTC</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="micro-saas" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="micro-saas" className="text-gray-700 text-sm">Micro-SaaS</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="other" className="border border-gray-300 text-blue-600 rounded" checked type="checkbox" />
                                    <label for="other" className="text-gray-700 text-sm">Other</label>
                                </div>
                                <div className="flex flex-row col-span-1 gap-2 items-center">
                                    <input name="agency" className="border border-gray-300 text-blue-600 rounded" type="checkbox" />
                                    <label for="agency" className="text-gray-700 text-sm">Agency</label>
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
                            <input type="range" list="stpage" className="text-blue-600 bg-blue-600 range"/>
                            <datalist className="hidden" id="stpage">
                                <option value="0 months"  label="0 months"></option>
                                <option value="1-6 months"  label="1-6 months"></option>
                                <option value="7 months - 1 year"  label="7 months - 1 year"></option>
                                <option value="1-3 years"  label="1-3 years"></option>
                                <option value="4-6 years"  label="4-6 years"></option>
                                <option value="7-10 years"  label="7-10 years"></option>
                                <option value="10-14 years"  label="10-14 years"></option>
                                <option value="14-19 years"  label="14-19 years"></option>
                                <option value="20+ years"  label="20+ years"></option>
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
                    <div id="content" className="col-span-4 text-left flex flex-col p-3 gap-5">
                        {(startups && startups.length > 0) ? startups.map(st => (
                            <div key={st.id} className="p-7 bg-gray-100 rounded border border-dashed border-gray-300 flex flex-row justify-evenly divide-x-2 divide-gray-300 hover:border-solid hover:bg-white">
                                <section id={st.id + "_basics"} className="flex flex-col p-3 gap-4 w-full">
                                    <div className="flex flex-row gap-1 items-center justify-between">
                                        <div>
                                            <h2 className="font-display text-black font-bold leading-none tracking-tight">{st.name}</h2>
                                            <small className="text-xs text-gray-400 font-display leading-none">{st.url}</small>
                                        </div>
                                        <div className="border border-blue-400 text-blue-600 items-center justify-between bg-white font-semibold px-5 py-3 rounded flex flex-row gap-2 text-md leading-none">
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
                                    <div className="flex flex-row gap-1 items-center justify-between">
                                        {st.isOpen ? (
                                            <div className="text-blue-600 items-center justify-between bg-blue-100 font-semibold px-5 py-3 rounded flex flex-row gap-2 text-md leading-none">
                                                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                                <span className="">Open to offers</span>
                                            </div>
                                        ) : (
                                            <div className="text-gray-500 items-center justify-between bg-gray-200 font-semibold px-5 py-3 rounded flex flex-row gap-2 text-md leading-none">
                                                <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                                                <span className="">Offer closed</span>
                                            </div>
                                        )}
                                        <div></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1">
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
