import SuccessStoryCard from '@/components/SuccessStoryCard';

function SuccessStories() {
  const successStories = [
    {
      logo: (
        <svg
          width="196"
          height="32"
          viewBox="0 0 196 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 object-contain"
        >
          <path
            d="M88.9239 23.3771H96.6307L95.4775 25.9193L85.9641 25.9183V6.53463H88.9265L88.9239 23.3771ZM103.599 6.00026C106.157 6.00026 108.343 7.15082 108.919 7.52609L107.872 9.83894C107.154 9.39591 105.415 8.5268 103.638 8.5268C101.517 8.5268 100.194 9.43631 100.194 11.0494C100.194 15.2139 109.881 12.9297 109.881 20.1992C109.881 23.5023 107.244 25.9194 102.626 25.9194L97.7876 25.9163L98.9382 23.3767L102.544 23.3757C105.063 23.3757 106.771 22.4323 106.771 20.4178C106.771 15.4807 97.125 18.0894 97.125 11.2655C97.125 8.06528 99.6634 6.00026 103.599 6.00026ZM116.718 12.2827L115.489 25.9188H112.433L114.476 6.53385H117.078L122.895 18.6936L128.507 6.53385H131.114L133.15 25.9188H130.138L128.86 11.9844L123.415 23.7792H122.219L116.718 12.2827ZM140.556 21.291L138.859 25.918H135.712L143.39 6.36889H145.474L153.058 25.918H149.785L148.09 21.291H140.556ZM144.324 11.0141L141.465 18.8153H147.182L144.324 11.0141ZM178.781 25.9185H175.935V6.53359H178.334L188.094 19.9494V6.53359H190.94V25.9185H188.871L178.781 12.0518V25.9185ZM168.062 19.9488V6.53424H170.908V25.9179H168.839L158.749 12.0525V25.9179H155.904V6.53424H158.302L168.062 19.9488ZM73.9641 14.5028L80.8256 14.4997L80.8267 17.008H73.9626L73.9615 23.4097H82.2018L82.2008 25.9193L71.002 25.9183V6.53333L81.9073 6.5302V9.04241L73.9657 9.04137L73.9641 14.5028ZM8.91256 23.6246L12.192 23.6236C14.7592 23.6236 16.5554 22.4743 16.5554 20.3934C16.5554 17.7522 14.2896 16.6642 11.425 16.6642H10.5275L11.5502 14.38C13.0621 14.38 15.6736 14.1337 15.6736 11.3713C15.6736 10.084 14.827 8.78094 12.012 8.78094H8.91256V23.6246ZM6.05447 6.44959H12.3133C16.8581 6.44959 18.6413 8.7012 18.6413 11.2799C18.6413 13.2709 17.3603 14.6025 16.0963 15.2918C17.6551 15.8873 19.5661 17.1773 19.5661 20.1873C19.5661 23.2298 17.4568 26 12.2598 26H6.05447V6.44959ZM62.2255 9.06787V25.9184H59.2644V9.06787H53.826V6.5309H67.6638V9.06787H62.2255ZM26.3126 14.5029L33.1754 14.4997V17.008H26.3126L26.3105 23.4097H34.5508L34.5498 25.9193L23.3509 25.9183V6.53338L34.2563 6.53025V9.04246L26.3147 9.04142L26.3136 14.5023L26.3126 14.5029ZM42.734 16.1849H43.111C45.9639 16.1849 48.0601 15.1608 48.0601 12.2225C48.0601 10.3188 46.6774 8.84505 44.2811 8.84505H41.8183L41.8141 25.9184H38.9195V6.53351H44.9826C49.333 6.53351 51.1071 9.27635 51.1071 12.2889C51.1071 15.1829 49.3148 16.9381 47.1272 17.686L52.6307 25.9184H49.0017L42.734 16.1849Z"
            fill="#595959"
          />
        </svg>
      ),
      statistic: "+2,500",
      subtitle: "Items Successfully Categorized",
      description:
        "Turbocharge your category strategy execution & drive continuous business value Category owners invest significant time in stakeholder...",
    },
    {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d89d9a5cc9e61a7522a986af5af641d051ecac3",
      logoAlt: "Lamb Weston logo",
      statistic: "90%",
      subtitle: "Categorization Accuracy",
      description:
        "Turbocharge your category strategy execution & drive continuous business value Category owners invest significant time in stakeholder...",
    },
    {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/885f02ac60f86a2168f5be863bfb52b80b597001",
      logoAlt: "Rabobank logo",
      statistic: "€1.2B",
      subtitle: "Cost Saving Achieved",
      description:
        "Turbocharge your category strategy execution & drive continuous business value Category owners invest significant time in stakeholder...",
    },
  ];

  return (
    <section
      id="success-stories"
      aria-label="Success Stories"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            You can have it all
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our success stories speak for themselves. Here’s how we’ve helped
            businesses achieve their goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {successStories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              logo={story.logo}
              logoAlt={story.logoAlt}
              statistic={story.statistic}
              subtitle={story.subtitle}
              description={story.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;