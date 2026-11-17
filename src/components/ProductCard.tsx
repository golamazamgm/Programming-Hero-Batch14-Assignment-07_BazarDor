import { Product } from '@/type';
const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-5 flex flex-col justify-between gap-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[#1A9951]/40">
            <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#F0F5F0] flex items-center justify-center text-2xl shrink-0">
                    {product.image}
                </div>
                <div>
                    <h3 className="text-base font-bold text-[#1D271F] leading-snug">
                        {product.nameBn}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                        প্রতি {product.unit}
                    </p>
                </div>
            </div>

            <div className="flex items-end justify-between pt-1">
                <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="text-lg font-bold text-[#1D271F] mt-0.5">
                        {product.today}{' '}
                        <span className="text-sm font-normal text-gray-600">টাকা</span>
                    </p>
                </div>

                <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        product.change.dir === 'up'
                            ? 'bg-[#D03739]/10 text-[#D03739]'
                            : product.change.dir === 'down'
                            ? 'bg-[#16A34A]/10 text-[#16A34A]'
                            : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    {product.change.dir === 'up'
                        ? '▲'
                        : product.change.dir === 'down'
                        ? '▼'
                        : '—'}{' '}
                    {product.change.pct}%
                </span>
            </div>
        </div>
    );
};

export default ProductCard;