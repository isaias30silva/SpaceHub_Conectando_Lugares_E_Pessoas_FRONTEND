import SearchHeader from "@/components/search/SearchHeader";
import Filters from "@/components/search/Filters";
import SortBar from "@/components/search/SortBar";
import SearchResults from "@/components/search/SearchResults";
import MobileFilters from "@/components/search/MobileFilters";

import Container from "@/components/ui/Container";

export default function SearchPage() {
  return (
    <main>
      <SearchHeader />

      <Container>
        <MobileFilters />
        <div
          className="
            mt-10

            grid
            grid-cols-1
            lg:grid-cols-4

            gap-8
          "
        >
          <aside
            className="
            hidden
            lg:block
            lg:col-span-1
            "
          >
            <Filters />
          </aside>

          <section
            className="
              lg:col-span-3
            "
          >
            <SortBar />

            <SearchResults />
          </section>
        </div>
      </Container>
    </main>
  );
}
