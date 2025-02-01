import Overview from "./Overview";
import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="px-3 pb-20 dark:bg-dark lg:px-24">
      <p className="text-center text-2xl text-primary">TRUSTED BY THE BEST</p>
      <div className="container px-4">
        <div className="py-20">
          <Overview />
        </div>
        {/* -mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11 */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
