import { Renderer } from "@/components/Renderer";

const loading = () => {
    const keyframes = [
        '000', '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '020', '021', '022', '023', '024', '025', '026', '027', '028', '029', '030', '031', '032', '033', '034', '035', '036', '037', '038', '039', '040', '041', '042', '043', '044', '045', '046', '047', '048', '049', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059', '060', '061', '062', '063', '064', '065', '066', '067', '068', '069', '070', '071', '072', '073', '074', '075', '076', '077', '078', '079', '080', '081', '082', '083', '084', '085', '086', '087', '088', '089', '090', '091', '092', '093', '094', '095', '096', '097', '098', '099', '100'
    ];
    return (
        <div
            className="relative h-screen w-screen mx-auto transition duration-1000 bg-black/20 flex flex-col px-6 animate-pulse blur-lg"
        >
            <div className="container mx-auto flex flex-col justify-center items-center h-full">
                <span className="inline-flex text-4xl text-white font-mono">Loading...</span>
                <Renderer
                    className="absolute z-50 flex flex-col justify-center items-center text-lg"
                    speed={150}
                    keyframes={keyframes}
                    category="Numbers"
                />%
            </div>
        </div>
    );
}

export default loading;