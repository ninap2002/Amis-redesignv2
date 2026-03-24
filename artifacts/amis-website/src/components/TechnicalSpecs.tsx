import { TECH_SPECS, type TechSpec } from "@/data/techSpecs";
import { Package, Clock, Weight, Zap, FlaskConical, Layers, ShieldCheck } from "lucide-react";

function SectionHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary uppercase tracking-wide">{title}</h3>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function PhysicalProps({ props }: { props: TechSpec["physicalProps"] }) {
  const icons = [Package, Clock, Weight];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {props.map((p, i) => {
        const Icon = icons[i] ?? Package;
        return (
          <div key={p.label} className="bg-white rounded-xl border border-border p-5 flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{p.label}</p>
              <p className="text-sm font-medium text-foreground leading-snug">{p.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GlossBar({ level }: { level: TechSpec["glossLevels"][0] }) {
  const pct = level.max;
  return (
    <div className="flex items-center gap-4">
      <div className="w-28 shrink-0">
        <p className="text-sm font-semibold text-foreground">{level.name}</p>
        <p className="text-xs text-muted-foreground">{level.range}</p>
      </div>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-bold text-accent w-10 text-right">{level.range}</span>
    </div>
  );
}

function PolyTable({ data }: { data: TechSpec["polymerization"] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-left px-4 py-3 font-semibold text-sm">Rodzaj produktu</th>
            {data.temps.map(t => (
              <th key={t} className="px-3 py-3 font-semibold text-center whitespace-nowrap">{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 text-foreground font-medium leading-snug">{row.label}</td>
              {data.temps.map(t => (
                <td key={t} className="px-3 py-3 text-center">
                  {row.temps[t] ? (
                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent rounded-md font-bold text-sm">
                      {row.temps[t]} min
                    </span>
                  ) : (
                    <span className="text-muted-foreground/40">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MechTable({ props }: { props: TechSpec["mechProps"] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-border">
            <th className="text-left px-4 py-3 font-semibold text-primary">Badanie</th>
            <th className="px-4 py-3 font-semibold text-primary text-center whitespace-nowrap">Norma</th>
            <th className="px-4 py-3 font-semibold text-primary text-right">Wynik</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
              <td className="px-4 py-3 text-foreground font-medium leading-snug">{p.test}</td>
              <td className="px-4 py-3 text-center">
                <span className="inline-block px-2 py-0.5 bg-primary/5 text-primary rounded text-xs font-mono font-semibold">
                  {p.norm}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium text-foreground/80">{p.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TechnicalSpecs({ productId }: { productId: string }) {
  const spec = TECH_SPECS[productId];
  if (!spec) return null;

  return (
    <div className="space-y-10">
      {/* Tagline */}
      <p className="text-base text-foreground/80 leading-relaxed border-l-4 border-accent pl-5 py-1 bg-accent/5 rounded-r-xl">
        {spec.tagline}
      </p>

      {/* Physical props */}
      <div>
        <SectionHeading icon={<Package className="w-4 h-4" />} title="Właściwości fizyczne i składowanie" />
        <PhysicalProps props={spec.physicalProps} />
      </div>

      {/* Application */}
      <div>
        <SectionHeading icon={<Zap className="w-4 h-4" />} title="Aplikacja" />
        <p className="text-foreground/80 bg-white rounded-xl border border-border px-5 py-4 font-medium">
          {spec.application}
        </p>
      </div>

      {/* Product range */}
      <div>
        <SectionHeading icon={<Layers className="w-4 h-4" />} title="Gama produktów" />
        <p className="text-foreground/80 bg-white rounded-xl border border-border px-5 py-4 leading-relaxed">
          {spec.productRange}
        </p>
      </div>

      {/* Polymerization */}
      <div>
        <SectionHeading icon={<FlaskConical className="w-4 h-4" />} title="Krzywa polimeryzacji" />
        <p className="text-sm text-muted-foreground mb-4">{spec.polymerization.note}</p>
        <PolyTable data={spec.polymerization} />
      </div>

      {/* Gloss levels */}
      <div>
        <SectionHeading icon={<Layers className="w-4 h-4" />} title="Stopnie połysku (pod kątem 60°)" />
        <div className="bg-white rounded-xl border border-border px-6 py-5 space-y-4">
          {spec.glossLevels.map(g => <GlossBar key={g.name} level={g} />)}
        </div>
      </div>

      {/* Mechanical & chemical props */}
      <div>
        <SectionHeading icon={<ShieldCheck className="w-4 h-4" />} title="Właściwości chemiczne i mechaniczne" />
        <MechTable props={spec.mechProps} />
      </div>
    </div>
  );
}
