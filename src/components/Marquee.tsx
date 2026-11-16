import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Product {
    nameBn: string;
    today: number;
    image: string;
    change: {
      dir: "up" | "down";
      pct: number;
    }
}
const Marquee = async () => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data = await res.json()
    const products: Product[]  = data.slice(0, 10)

    return (
        <div className="border-y border-gray-200 bg-[#fafafa]">
            <MarqueeText direction="right" duration={10} pauseOnHover={true} className="flex items-center gap-2" playOnlyInView={true}>
                <div className="flex items-center">
                    {products.map((product: Product, index: number) => (
                        <div key={index} className="flex items-center gap-2 px-5 py-2.5 border-r border-gray-200 whitespace-nowrap cursor-pointer hover:bg-gray-200/50 transition-colors">
                            <span className="text-base leading-none">{product.image}</span>
                            <span className="text-sm font-semibold text-gray-800">{product.nameBn}</span>
                            <span className="text-sm text-gray-600">{product.today} টাকা/কেজি</span>
                            <span className={`text-xs font-semibold flex items-center gap-0.5 ${product.change.dir === "up" ? "text-red-600" : "text-emerald-600"}`}>
                                {product.change.dir === "up" ? "▲" : "▼"} {product.change.pct}%
                            </span>
                        </div>
                    ))}
                </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;