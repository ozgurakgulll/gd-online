import React from "react";

export function BannerHero({start}:{  start: () => void;}) {
    return <div className="bg-zinc-900 text-gray-200 font-poppins overflow-y-hidden">
        <section className="min-h-screen flex items-center justify-center">
            <div
                className="max-w-[1024px] w-[90%] mx-auto flex items-center justify-center flex-col-reverse md:flex-row gap-10">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-[60px] font-bold text-primary leading-tight uppercase">GD
                        Online</h1>
                    <p className="text-sm md:text-lg">Dünyanın her yerinden insanlarla tanışın ve keyifli sohbetler
                        edin. Muhteşem insanlarla rastgele eşleşmeler yapın ve anın tadını çıkarın.</p>
                    <span className="btn-primary cursor-pointer " onClick={()=>void start()}>Sohbete Başla</span>
                </div>
                <div className="flex-1">
                    <div className="w-full h-[50vh] md:h-screen overflow-hidden relative">
                        <img className="w-full h-full md:h-[150vh] object-contain md:absolute md:top-[-25%]"
                             src="/hero_section_img.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="min-h-screen flex items-center justify-center bg-orange-100 py-[100px] text-gray-700">
            <div className="max-w-[1024px] w-[90%] mx-auto">
                <div className="text-center max-w-lg mx-auto">
                    <h1 className="text-primary text-4xl font-bold">Sohbet Odaları</h1>
                    <p className="text-sm md:text-base text-gray-700 mt-3">Rasgele sohbet odalarında keyifli vakit
                        geçirin. Her odada farklı insanlar ve farklı hikayeler sizi bekliyor.</p>
                </div>
                <div className="flex gap-5 mt-11 md:flex-row flex-col">
                    <div className="bg-orange-200 p-5 rounded-xl flex-1">
                        <img src="/host-1.png" alt="host-1" className="rounded-lg object-cover w-full"/>
                        <h2 className="text-gray-700 text-xl font-medium mt-3">Kamal Azad</h2>
                        <p className="text-sm md:text-base mt-2">Merhaba! Ben Kamal, çeşitli konularda sohbet etmeyi
                            seven biriyim. Gelin, birlikte keyifli bir sohbet edelim!</p>
                    </div>
                    <div className="bg-slate-200 p-5 rounded-xl flex-1">
                        <img src="/host-2.png" alt="host-2" className="rounded-lg object-cover w-full"/>
                        <h2 className="text-gray-700 text-xl font-medium mt-3">Hasan Rahid</h2>
                        <p className="text-sm md:text-base mt-2">Selamlar! Ben Hasan, farklı kültürlerden insanlarla
                            tanışmayı ve deneyim paylaşmayı seviyorum. Sohbet odasında görüşmek üzere!</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex items-center justify-center py-[100px]">
            <div className="max-w-[1024px] w-[90%] mx-auto">
                <h1 className="text-primary text-4xl font-bold text-center">Popüler Sohbetler</h1>
                <div className="mt-10 max-w-[100%] overflow-x-auto rounded-lg">
                    <table
                        className="w-fit bg-neutral-800 rounded-lg min-w-[600px] text-center mx-auto overflow-hidden">
                        <thead>
                        <tr className="bg-zinc-700">
                            <th className="p-3">Katılımcılar</th>
                            <th className="p-3">Tarih</th>
                            <th className="p-3">Bağlantı</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-500">
                            <td className="p-3">Ali Veli, Ayşe Yılmaz</td>
                            <td className="p-3">05/8/2022</td>
                            <td className="p-3">
                                 <span  className="btn-secondary cursor-pointer">Sohbet Et</span>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-500">
                            <td className="p-3">Mehmet Can, Zeynep Kaya</td>
                            <td className="p-3">12/8/2022</td>
                            <td className="p-3">
                                 <span  className="btn-secondary cursor-pointer">Sohbet Et</span>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-500">
                            <td className="p-3">Ahmet Ak, Fatma Demir</td>
                            <td className="p-3">19/8/2022</td>
                            <td className="p-3">
                                 <span  className="btn-secondary cursor-pointer">Sohbet Et</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3">Ece Öz, Barış Yıldız</td>
                            <td className="p-3">25/8/2022</td>
                            <td className="p-3">
                                 <span  className="btn-secondary cursor-pointer">Sohbet Et</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section className="flex items-center justify-center py-[100px]">
            <div className="max-w-[800px] w-[90%] mx-auto">
                <div className="flex justify-between md:flex-row flex-col md:gap-5 gap-10">
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">50+</h1>
                        <p className="text-xl">sohbet odaları</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">100+</h1>
                        <p className="text-xl">saat sohbet</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">80+</h1>
                        <p className="text-xl">konuklar</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex items-center justify-center py-[100px] bg-cta-img bg-cover bg-center"
                 style={{backgroundImage: "url('/mic.png')"}}>
            <div className="max-w-[800px] w-[90%] mx-auto text-center">
                <h1 className="text-4xl md:text-[80px] font-bold leading-tight uppercase">Bir Sonraki Sohbeti
                    Kaçırmayın</h1>
                 <span  className="btn-primary cursor-pointer mt-5">Şimdi Katıl</span>
            </div>
        </section>
        <section className="flex items-center justify-center py-[100px]">
            <div className="max-w-[500px] w-[90%] mx-auto text-center">
                <h1 className="text-4xl md:text-[80px] font-extrabold text-primary leading-tight uppercase">Rasgele
                    Sohbet</h1>
                <p className="text-base md:text-lg text-gray-200 my-3">Her an, her yerde, yeni insanlarla tanışmanın
                    ve sohbet etmenin en keyifli yolu. Haydi, şimdi sohbete başla!</p>
            </div>
        </section>
    </div>
}
