const fishProfiles = [
  {
    name: "孔雀鱼",
    latin: "Poecilia reticulata",
    temperament: "温和群居",
    size: "3-5 cm",
    water: "24-26°C, pH 6.8-7.6",
    diet: "颗粒 + 冷冻丰年虾",
    image: "/images/guppy.svg"
  },
  {
    name: "霓虹灯鱼",
    latin: "Paracheirodon innesi",
    temperament: "温和群游",
    size: "3-4 cm",
    water: "22-26°C, pH 6.0-7.0",
    diet: "细颗粒 + 微型饲料",
    image: "/images/neon-tetra.svg"
  },
  {
    name: "熊猫鼠",
    latin: "Corydoras panda",
    temperament: "底栖温和",
    size: "4-5 cm",
    water: "22-25°C, pH 6.4-7.2",
    diet: "沉底饲料 + 冷冻红虫",
    image: "/images/panda-corydoras.svg"
  },
  {
    name: "斗鱼",
    latin: "Betta splendens",
    temperament: "单养或隔离",
    size: "6-7 cm",
    water: "24-28°C, pH 6.5-7.5",
    diet: "专用颗粒 + 冻干虫",
    image: "/images/betta.svg"
  }
];

const equipmentList = [
  {
    title: "过滤系统",
    detail: "小缸用瀑布过滤，大缸用外置滤桶；每小时循环 4-6 倍水体。"
  },
  {
    title: "加热棒",
    detail: "恒温 24-26°C，避免温差超过 2°C。"
  },
  {
    title: "照明",
    detail: "每天 6-8 小时，营造自然昼夜节律。"
  },
  {
    title: "水质测试",
    detail: "常备 pH、氨氮、亚硝酸盐试剂盒，观察水体健康。"
  }
];

const waterTargets = [
  { label: "温度", value: "24-26°C（热带鱼通用）" },
  { label: "pH", value: "6.5-7.5（偏中性）" },
  { label: "氨氮", value: "0 ppm" },
  { label: "亚硝酸盐", value: "0 ppm" },
  { label: "硝酸盐", value: "< 20 ppm" }
];

const careTips = [
  "新缸先养水 2-4 周，建立硝化系统后再逐步入鱼。",
  "每周换水 20-30%，先除氯并保持温度一致。",
  "喂食少量多次，避免残饵污染。",
  "观察鱼体状态：鳍裂、呼吸急促或拒食要及时处理。",
  "鱼只混养前确认水质需求与性格相容。"
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-aquarium-blue via-sky-900 to-slate-900 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              家庭水族入门
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              观赏鱼指南 · 家庭饲养图鉴
            </h1>
            <p className="text-base text-sky-100 sm:text-lg">
              精选适合家庭饲养的观赏鱼，搭配关键水质指标与日常养护要点，
              帮你快速搭建稳定又好看的小型水族生态。
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-sky-100">
              <span className="rounded-full border border-sky-300/30 px-4 py-2">
                低维护
              </span>
              <span className="rounded-full border border-sky-300/30 px-4 py-2">
                适合新手
              </span>
              <span className="rounded-full border border-sky-300/30 px-4 py-2">
                小型水族缸
              </span>
            </div>
          </div>
          <div className="relative h-64 w-full max-w-md rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-4 rounded-2xl border border-white/20" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
                  今日推荐
                </p>
                <h2 className="text-2xl font-semibold">混养组合</h2>
                <p className="text-sm text-sky-100">
                  霓虹灯鱼 + 熊猫鼠 + 孔雀鱼，颜色丰富且性格温和。
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/images/scene.svg"
                  alt="家庭水族缸示意插图"
                  width={140}
                  height={100}
                />
                <div className="text-sm text-sky-100">
                  <p>建议水量</p>
                  <p className="text-lg font-semibold text-white">40-60 L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">家庭适养观赏鱼图鉴</h2>
            <p className="mt-3 text-slate-600">
              选择性格温和、对水质要求相对稳定的品种，适合家庭缸初学者。
            </p>
          </div>
          <span className="hidden rounded-full bg-sand px-4 py-2 text-sm text-slate-700 md:inline-block">
            共 4 种推荐
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {fishProfiles.map((fish) => (
            <article
              key={fish.name}
              className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{fish.name}</h3>
                  <p className="text-sm text-slate-500 italic">{fish.latin}</p>
                </div>
                <div className="h-16 w-24 rounded-2xl bg-slate-50 p-3">
                  <img
                    src={fish.image}
                    alt={`${fish.name} 插图`}
                    width={72}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    性格
                  </dt>
                  <dd className="mt-2 font-medium text-slate-700">{fish.temperament}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    体长
                  </dt>
                  <dd className="mt-2 font-medium text-slate-700">{fish.size}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    水质
                  </dt>
                  <dd className="mt-2 font-medium text-slate-700">{fish.water}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    饮食
                  </dt>
                  <dd className="mt-2 font-medium text-slate-700">{fish.diet}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold">基础设备清单</h2>
            <p className="mt-3 text-slate-300">
              先把基础设备准备齐全，再安排养水和入缸流程。
            </p>
            <div className="mt-8 space-y-5">
              {equipmentList.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-semibold">水质参数建议</h2>
            <p className="mt-3 text-slate-300">
              稳定比完美更重要，保持稳定范围即可。
            </p>
            <div className="mt-8 grid gap-4">
              {waterTargets.map((target) => (
                <div
                  key={target.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {target.label}
                  </span>
                  <span className="text-base font-semibold text-white">
                    {target.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold">日常养护要点</h2>
            <p className="mt-3 text-slate-600">
              按照固定节奏维护，让水族缸更稳定省心。
            </p>
            <ul className="mt-8 space-y-4">
              {careTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-aquarium-teal text-white">
                    ✓
                  </span>
                  <p className="text-sm text-slate-600">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-sand p-8">
            <h3 className="text-2xl font-semibold text-slate-800">每日 3 件事</h3>
            <p className="mt-3 text-sm text-slate-700">
              让养鱼变得简单的日常检查流程。
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="rounded-2xl bg-white/70 p-4">
                观察鱼群游姿、呼吸与抢食状态。
              </div>
              <div className="rounded-2xl bg-white/70 p-4">
                检查过滤流量与加热温度。
              </div>
              <div className="rounded-2xl bg-white/70 p-4">
                记录水面残饵与排泄物，必要时清理。
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            M1 可运行版本 · 观赏鱼指南
          </p>
          <p className="text-sm text-slate-500">
            下一步：完善品种库与水族笔记功能
          </p>
        </div>
      </footer>
    </main>
  );
}
