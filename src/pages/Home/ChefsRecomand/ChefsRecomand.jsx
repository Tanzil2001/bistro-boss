import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import CardChefs from "./CardChefs/CardChefs";

const ChefsRecomand = () => {
    const [menus] = useMenu() ;

    return (
        <div>
            <SectionTitle subHeading="--- Should Try ---" heading="CHEF RECOMMENDS"></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    menus.slice(0, 3).map(menu => <CardChefs 
                    key={menu._id}
                    menu={menu}
                    ></CardChefs>)
                }
            </div>
        </div>
    );
};

export default ChefsRecomand;