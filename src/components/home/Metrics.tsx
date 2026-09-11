import Container from "@/components/layout/Container";
import { metrics } from "@/lib/metrics";

export default function Metrics() {
  return (
    <section className="border-b border-border py-14">
      <Container>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-serif text-3xl sm:text-4xl">{metric.value}</dt>
              <dd className="mt-2 text-sm text-muted">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
