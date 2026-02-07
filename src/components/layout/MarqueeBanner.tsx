export default function MarqueeBanner() {
  const text = "BUILDING FOUNDATIONS \u00A0•\u00A0 CRAFTING STRENGTH \u00A0•\u00A0 STRUCTURE IS POWER \u00A0•\u00A0 ";
  const repeated = text.repeat(8);

  return (
    <div className="bg-primary overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-heading text-2xl md:text-3xl tracking-wider text-primary-foreground">
          {repeated}
        </span>
        <span className="font-heading text-2xl md:text-3xl tracking-wider text-primary-foreground">
          {repeated}
        </span>
      </div>
    </div>
  );
}
