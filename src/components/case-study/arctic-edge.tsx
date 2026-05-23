import { CaseFigure } from "@/components/case-study/case-figure";
import { CaseHero } from "@/components/case-study/case-hero";
import { CasePullQuote } from "@/components/case-study/case-pull-quote";
import { CaseSection } from "@/components/case-study/case-section";
import { CaseStats, type CaseStat } from "@/components/case-study/case-stats";

const STATS: CaseStat[] = [
  {
    value: "19",
    description: "Screens shipped end to end across active, error, and recovery states.",
    label: "Interface surfaces",
  },
  {
    value: "7",
    description: "System states covered: cooling, heating, ready, off, low-flow, disconnected, locked.",
    label: "Hardware states",
  },
  {
    value: "8",
    description: "Confirmation and recovery modals wrapping every irreversible action.",
    label: "Safety surfaces",
  },
  {
    value: "0",
    description: "Reported safety incidents in the first 90 days of the Hotel One pilot.",
    label: "Pilot incidents",
  },
];

const PROBLEMS = [
  {
    id: "P.01",
    title: "The misread temperature.",
    body: "A guest who skims the screen and steps in expecting warm water, when it actually reads five degrees, has a medical event. The number had to read across the room.",
  },
  {
    id: "P.02",
    title: "The silent disconnect.",
    body: "Wi-Fi drops happen. The app must say so loudly the moment the link breaks, not pretend the chiller is still listening to taps that never land.",
  },
  {
    id: "P.03",
    title: "The accidental tap.",
    body: "A child, a curious guest, or a cleaner will touch the panel. The interface had to distinguish viewing, controlling, and overriding without ever locking the operator out of an emergency stop.",
  },
];

export function ArcticEdgeCase() {
  return (
    <>
      <CaseHero
        meta={[
          { label: "Client", value: "Arctic Edge · 2024" },
          { label: "Role", value: "Design Lead" },
          { label: "Team", value: "Solo design · hardware partner · Tuya platform" },
          { label: "Status", value: "Shipped · Hotel One pilot", highlight: true },
        ]}
        title={
          <>
            Arctic Edge:
            <br />a calm interface for a
            <br />
            <span className="accent-it">brutally cold</span> machine.
          </>
        }
        lede={
          <>
            Arctic Edge is a smart ice bath built for hotel wellness suites. The hardware is
            unforgiving: a few degrees of inattention and a guest gets hurt. The app had to be the
            calmest, clearest object in the room.
          </>
        }
      />

      <CaseFigure
        priority
        images={[
          {
            src: "/work/arctic-edge/page-01.png",
            alt: "Arctic Edge cover — Smart Tub App Interface for ice bath therapy",
          },
        ]}
        kicker="ARCTIC EDGE / 001"
        caption="Smart tub interface · Temperature, flow, timer, scheduling, safety"
      />

      <CaseSection
        step="01 / Context"
        title={
          <>
            A consumer panel
            <br />
            on commercial
            <br />
            hardware.
          </>
        }
      >
        <p className="text-ink">
          Most ice bath apps are built for athletes who already know their protocol. Arctic Edge
          ships into hotel rooms, where the user is a guest with no training and the operator is a
          wellness manager who only sees the device when something goes wrong. The first hardware
          pilot was Hotel One.
        </p>
        <p className="text-ink-dim">
          The hardware speaks Tuya, so the app inherits a pairing flow and an account shell. Inside
          that shell, every screen of the Arctic Edge experience needed to feel like a single,
          coherent object. The product team gave me one home screen and a handful of modals to work
          with. Everything else had to fall away.
        </p>
      </CaseSection>

      <CaseFigure
        images={[
          {
            src: "/work/arctic-edge/page-02.png",
            alt: "Anatomy of the main interface — labeled diagram of the home screen",
          },
        ]}
        kicker="ANATOMY"
        caption="One home screen — every control reachable without scrolling"
      />

      <CaseSection
        step="02 / Problem"
        title={
          <>
            Three failures
            <br />
            I designed against.
          </>
        }
      >
        <ul className="list-none">
          {PROBLEMS.map((problem) => (
            <li
              key={problem.id}
              className="grid grid-cols-[80px_1fr] items-start gap-6 border-t border-line py-5 last:border-b"
            >
              <span className="font-mono text-[11px] tracking-[0.06em] text-accent">
                {problem.id}
              </span>
              <p className="text-[17px] leading-[1.55]">
                <strong className="font-medium">{problem.title}</strong> {problem.body}
              </p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection
        step="03 / Process"
        title={
          <>
            The home screen
            <br />
            is the whole
            <br />
            product.
          </>
        }
      >
        <p className="text-ink">
          Temperature, target, mode, flow rate, power, and lock all sit on one surface, reachable
          without scrolling. The current temperature is the largest object on the screen, set in
          display weight, with the unit underneath in a quiet sans. Colour carries state: blue for
          cooling, red for heating, dim grey for off. A guest can tell across a dim suite whether
          the bath is ready before they ever pick up the phone.
        </p>
        <p className="text-ink">
          Every irreversible action confirms. Force start, the most dangerous control in the
          system, requires a deliberate two-step pass through a red warning modal that names the
          consequence in a single sentence. Connection loss replaces the cooling animation with a
          troubleshoot checklist, never a spinner. Power outages restore the previous session with
          a clear preserved-settings preview, so an operator can pick up where the chiller left off
          without rebuilding state from memory.
        </p>
        <p className="text-ink-dim">
          The session timer leans on motivation more than precision. A breathing line, a calm
          heading, and a single visible exit. The last screen a guest sees before stepping out is a
          green completion shield with their time and water temperature, not a marketing prompt.
        </p>
      </CaseSection>

      <CaseFigure
        images={[
          {
            src: "/work/arctic-edge/page-03.png",
            alt: "Cooling and heating system states with coloured progress rings",
          },
          {
            src: "/work/arctic-edge/page-04.png",
            alt: "System off state and confirmation modal",
          },
          {
            src: "/work/arctic-edge/page-05.png",
            alt: "Lost connection state and troubleshoot checklist modal",
          },
          {
            src: "/work/arctic-edge/page-06.png",
            alt: "Target temperature reached and low flow rate alert",
          },
        ]}
        kicker="STATE COVERAGE"
        caption="Cooling, heating, off, disconnected, ready, low-flow — colour and copy carry status"
      />

      <CaseFigure
        images={[
          {
            src: "/work/arctic-edge/page-07.png",
            alt: "Session resume modal after a power outage, with preserved settings",
          },
          {
            src: "/work/arctic-edge/page-09.png",
            alt: "Interface lock modal and lock confirmation screen",
          },
          {
            src: "/work/arctic-edge/page-19.png",
            alt: "Force start safety protocol — warning modal and restart confirmation",
          },
        ]}
        kicker="SAFETY SURFACES"
        caption="Resume, lock, force start — two-step passes wrap every irreversible action"
      />

      <CaseFigure
        images={[
          {
            src: "/work/arctic-edge/page-11.png",
            alt: "Cooling schedules list with daily and weekday rules",
          },
          {
            src: "/work/arctic-edge/page-13.png",
            alt: "Add new schedule modal — time, action, repeat, and note fields",
          },
          {
            src: "/work/arctic-edge/page-14.png",
            alt: "Schedule confirmation summary with next trigger time",
          },
        ]}
        kicker="SCHEDULE FLOW"
        caption="List, create, confirm — three taps and a 7am ice bath is waiting"
      />

      <CaseFigure
        images={[
          {
            src: "/work/arctic-edge/page-15.png",
            alt: "Set temperature interface for cold and warm therapy zones",
          },
          {
            src: "/work/arctic-edge/page-16.png",
            alt: "Session timer setup and active session with breathing guidance",
          },
          {
            src: "/work/arctic-edge/page-17.png",
            alt: "Session completion summary with total time, water temperature, and goal completion",
          },
        ]}
        kicker="SESSION FLOW"
        caption="Set the temperature, run the session, see the result — no marketing surface"
      />

      <CasePullQuote
        quote={
          <>
            Guests use it once and ask the front desk how to{" "}
            <span className="accent-it">buy one for home.</span> That is the interface. The chiller
            is the same as everyone else&rsquo;s.
          </>
        }
        attribution="Wellness Director · Arctic Edge pilot · Boutique hotel group"
      />

      <CaseSection
        step="04 / Outcome"
        title={
          <>
            What shipped,
            <br />
            and what held up.
          </>
        }
      >
        <p className="text-ink">
          Arctic Edge launched with the Hotel One pilot at the end of 2024. Nineteen screens cover
          the full lifecycle: control, scheduling, session, recovery, and admin. Sessions ran
          without a single reported safety incident across the first ninety days. Schedule
          automation became the most used feature once front-desk teams learned that a 7am
          power-on meant guests woke up to a bath already cold.
        </p>
      </CaseSection>

      <CaseFigure
        images={[
          {
            src: "/work/arctic-edge/page-18.png",
            alt: "Advanced system settings — ozone clean, deviation tolerance, fan speed, force start",
          },
        ]}
        kicker="OPERATOR SETTINGS"
        caption="Ozone clean, deviation tolerance, fan speed — the admin surface stays behind a menu"
      />

      <CaseStats stats={STATS} />

      <CaseSection
        step="05 / Reflection"
        title={
          <>
            What I would
            <br />
            do differently.
          </>
        }
      >
        <p className="text-ink">
          Designing inside a third-party platform shell means inheriting someone else&rsquo;s
          navigation, auth, and pairing language. The cleanest screen in my system still hands off
          to a host that does not share its tone. The next iteration moves more of the experience
          into a fully owned wrapper, so the calm carries from first tap to last.
        </p>
        <p className="text-ink-dim">
          I also under-designed the operator side. A wellness manager checking five rooms before
          breakfast deserves a fleet view that the current single-device home cannot give them.
          That is the next brief.
        </p>
      </CaseSection>
    </>
  );
}
