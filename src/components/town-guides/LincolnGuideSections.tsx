import { lincolnGuide } from '@/data/lincolnGuide';
import SectionHeader from '@/components/SectionHeader';
import FAQSection from '@/components/FAQSection';
import {
  CaravanParkCard,
  FoodDrinkCard,
  RelatedGuides,
  StayListingCard,
  ThingToDoCard,
} from './GuideListingCards';
import { BusinessCTA, CorrectionsCTA, EditorialNote } from './EditorialBlocks';

export default function LincolnGuideSections() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Places to Stay in Lincoln"
            subtitle="Compare hotels, inns, B&Bs and guest stays in Lincoln for cathedral city breaks, historic centre visits, weekend stays and practical access to the wider Lincolnshire area."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {lincolnGuide.placesToStay.map((listing) => (
              <StayListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/20 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Caravan Parks & Holiday Parks near Lincoln"
            subtitle="Compare touring sites, campsites, lodge parks and countryside caravan options near Lincoln, useful for visitors who want city access, countryside walks, fishing, touring pitches or a quieter base outside the historic centre."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {lincolnGuide.caravanParks.map((listing) => (
              <CaravanParkCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Things to Do in Lincoln"
            subtitle="Explore Lincoln's historic landmarks, museums and cultural attractions, including the cathedral quarter, castle and city museums."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {lincolnGuide.thingsToDo.map((listing) => (
              <ThingToDoCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/20 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Food & Drink in Lincoln"
            subtitle="Compare Lincoln restaurants, cafes, bars and casual food stops, then check current menus, opening hours and booking requirements directly."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lincolnGuide.foodDrink.map((listing) => (
              <FoodDrinkCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-charcoal">Image use for Lincoln listings</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
            Hotel, restaurant and private business photos are not used unless they come from an approved affiliate feed, a partner feed or explicit permission. Attraction and area images must have clear public-use licences and attribution.
          </p>
          <a href="/image-credits" className="mt-4 inline-flex text-sm font-semibold text-coast underline decoration-dotted hover:text-coast-dark">
            View image credits
          </a>
        </div>
      </section>

      <BusinessCTA />
      <EditorialNote />
      <CorrectionsCTA />
      <FAQSection title="Lincoln FAQs" faqs={lincolnGuide.faqs} />
      <RelatedGuides links={lincolnGuide.relatedGuides} />
    </>
  );
}
