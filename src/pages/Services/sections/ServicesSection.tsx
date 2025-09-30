import { useState } from "react";
import OurServices from "../../../assets/section titles/services.png";
import DropDownItem from "../components/DropDownItem";
import { ServicesList } from "../../../data/ServicesList";

function ServicesSection() {
    const [openServiceId, setOpenServiceId] = useState<string | null>(null);

    const toggleService = (id: string) => {
        setOpenServiceId(openServiceId === id ? null : id);
    };

    return (
        <section id="services" className="mt-32 mb-8 md:mb-4 md:mt-40 flex flex-col items-center">
            <img src={OurServices} className="h-8 sm:h-10 md:h-14" alt="Our Services" />

            <div className="w-full mt-10 md:mt-4 divide-y divide-black">
                {ServicesList.map((service) => (
                    <DropDownItem
                        key={service.id}
                        service={service}
                        isOpen={openServiceId === service.id}
                        onToggle={() => toggleService(service.id)}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;