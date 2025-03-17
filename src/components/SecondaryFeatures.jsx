'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

const features = [
  {
    name: 'Improve Categorization',
    summary: 'Smarter Categories, Sharper Decisions',
    description:
      'Mithra’s AI-powered Categorization simplifies supplier and data classification.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId();
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="mx-auto" // Center the SVG
>
  <g clipPath="url(#clip0_1039_592)">
    <path d="M21.75 22.5H14.25C13.8358 22.5 13.5 22.1642 13.5 21.75V14.25C13.5 13.8358 13.8358 13.5 14.25 13.5H21.75C22.1642 13.5 22.5 13.8358 22.5 14.25V21.75C22.5 22.1642 22.1642 22.5 21.75 22.5ZM15 21H21V15H15V21Z" fill="white"/>
    <path d="M6 22.5C3.51877 22.5 1.5 20.4812 1.5 18C1.5 15.5188 3.51877 13.5 6 13.5C8.48123 13.5 10.5 15.5188 10.5 18C10.5 20.4812 8.48123 22.5 6 22.5ZM6 15C4.3458 15 3 16.3458 3 18C3 19.6542 4.3458 21 6 21C7.6542 21 9 19.6542 9 18C9 16.3458 7.6542 15 6 15Z" fill="white"/>
    <path d="M16.5 10.5H7.49999C7.22969 10.5 6.98054 10.3546 6.84742 10.1195C6.71429 9.8844 6.71774 9.59588 6.85694 9.36413L11.3584 1.86165C11.5037 1.61947 11.7519 1.5 12 1.5C12.2481 1.5 12.4963 1.61947 12.6415 1.86165L17.143 9.36413C17.2822 9.59588 17.2857 9.8844 17.1526 10.1195C17.0194 10.3546 16.7702 10.5 16.5 10.5ZM8.82457 9H15.1754L12 3.7077L8.82457 9Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1039_592">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>

        </>
      );
    },
  },
  {
    name: 'Taxonomy Health Checker',
    summary:
      'Optimize Your Data with Confidence',
    description:
      'Taxonomy Health Checker ensures your categorization framework is clean and optimized.',
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1039_603)">
<path d="M22.0926 17.2548V13.7069C22.0926 13.2525 21.912 12.8167 21.5905 12.4954C21.269 12.1741 20.833 11.9935 20.3784 11.9935H13.5212V8.56681H15.2355C15.69 8.56629 16.1257 8.38561 16.4471 8.0644C16.7685 7.7432 16.9493 7.3077 16.9498 6.85345V1.71336C16.9493 1.25911 16.7685 0.823613 16.4471 0.502408C16.1257 0.181203 15.69 0.000521491 15.2355 0H10.0926C9.63812 0.000453593 9.20235 0.181114 8.88096 0.502333C8.55957 0.823553 8.37881 1.25909 8.37836 1.71336V6.85345C8.37881 7.30772 8.55957 7.74326 8.88096 8.06448C9.20235 8.3857 9.63812 8.56636 10.0926 8.56681H11.8069V11.9935H4.94979C4.49513 11.9935 4.05909 12.1741 3.7376 12.4954C3.41611 12.8167 3.2355 13.2525 3.2355 13.7069V17.2554C2.42751 17.4639 1.72334 17.9597 1.25498 18.65C0.78663 19.3403 0.586248 20.1777 0.691398 21.0051C0.796547 21.8325 1.20001 22.5931 1.82616 23.1445C2.45231 23.6958 3.25815 24 4.09264 24C4.92713 24 5.73298 23.6958 6.35913 23.1445C6.98528 22.5931 7.38874 21.8325 7.49389 21.0051C7.59904 20.1777 7.39865 19.3403 6.9303 18.65C6.46195 17.9597 5.75778 17.4639 4.94979 17.2554V13.7069H11.8069V17.2553C10.9989 17.4638 10.2948 17.9597 9.82641 18.65C9.35806 19.3403 9.15768 20.1776 9.26283 21.005C9.36798 21.8324 9.77144 22.593 10.3976 23.1444C11.0237 23.6957 11.8296 23.9999 12.6641 23.9999C13.4986 23.9999 14.3044 23.6957 14.9306 23.1444C15.5567 22.593 15.9602 21.8324 16.0653 21.005C16.1705 20.1776 15.9701 19.3403 15.5017 18.65C15.0334 17.9597 14.3292 17.4638 13.5212 17.2553V13.7069H20.3784V17.2548C19.5704 17.4633 18.8662 17.9591 18.3978 18.6494C17.9295 19.3397 17.7291 20.1771 17.8343 21.0045C17.9394 21.8319 18.3429 22.5925 18.969 23.1439C19.5952 23.6952 20.401 23.9994 21.2355 23.9994C22.07 23.9994 22.8758 23.6952 23.502 23.1439C24.1281 22.5925 24.5316 21.8319 24.6367 21.0045C24.7419 20.1771 24.5415 19.3397 24.0732 18.6494C23.6048 17.9591 22.9006 17.4633 22.0926 17.2548ZM10.0926 1.71336H15.2355L15.2364 6.85345H10.0926V1.71336ZM5.80693 20.5604C5.80693 20.8992 5.70639 21.2305 5.51802 21.5122C5.32965 21.794 5.06192 22.0136 4.74867 22.1433C4.43543 22.273 4.09074 22.3069 3.7582 22.2408C3.42566 22.1747 3.12021 22.0115 2.88046 21.7719C2.64071 21.5323 2.47744 21.227 2.4113 20.8946C2.34515 20.5623 2.3791 20.2178 2.50885 19.9047C2.6386 19.5916 2.85832 19.324 3.14024 19.1357C3.42215 18.9475 3.75359 18.847 4.09264 18.847C4.54714 18.8475 4.98287 19.0282 5.30425 19.3494C5.62563 19.6706 5.80641 20.1061 5.80693 20.5604ZM14.3784 20.5604C14.3784 20.8992 14.2778 21.2305 14.0894 21.5122C13.9011 21.794 13.6333 22.0136 13.3201 22.1433C13.0069 22.273 12.6622 22.3069 12.3296 22.2408C11.9971 22.1747 11.6916 22.0115 11.4519 21.7719C11.2121 21.5323 11.0489 21.227 10.9827 20.8946C10.9166 20.5623 10.9505 20.2178 11.0803 19.9047C11.21 19.5916 11.4298 19.324 11.7117 19.1357C11.9936 18.9475 12.325 18.847 12.6641 18.847C13.1185 18.8476 13.5542 19.0283 13.8756 19.3495C14.1969 19.6707 14.3777 20.1061 14.3784 20.5604ZM21.2355 22.2737C20.8964 22.2737 20.565 22.1732 20.2831 21.985C20.0012 21.7967 19.7815 21.5291 19.6517 21.216C19.522 20.903 19.488 20.5585 19.5542 20.2261C19.6203 19.8937 19.7836 19.5884 20.0233 19.3488C20.2631 19.1092 20.5685 18.946 20.9011 18.8799C21.2336 18.8138 21.5783 18.8477 21.8915 18.9774C22.2048 19.1071 22.4725 19.3267 22.6609 19.6085C22.8492 19.8902 22.9498 20.2215 22.9498 20.5604C22.9493 21.0146 22.7685 21.4501 22.4471 21.7713C22.1257 22.0925 21.69 22.2732 21.2355 22.2737Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1039_603">
<rect width="24" height="24" fill="white" transform="translate(0.664062)"/>
</clipPath>
</defs>
</svg>

        </>
      )
    },
  },
  {
    name: 'Opportunity Dashboard',
    summary:
      'Uncover Hidden Patterns & Insights',
    description:
      'Opportunity Dashboard helps you discover valuable connections by identifying similarities.',
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
        <>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1039_612)">
<path d="M19.8359 15.75H18.3359V19.5H19.8359V15.75Z" fill="white"/>
<path d="M16.8359 12H15.3359V19.5H16.8359V12Z" fill="white"/>
<path d="M8.58594 19.5C7.59174 19.4988 6.63859 19.1034 5.93558 18.4004C5.23257 17.6973 4.83711 16.7442 4.83594 15.75H6.33594C6.33594 16.195 6.4679 16.63 6.71513 17C6.96236 17.37 7.31377 17.6584 7.7249 17.8287C8.13603 17.999 8.58843 18.0436 9.02489 17.9568C9.46135 17.87 9.86226 17.6557 10.1769 17.341C10.4916 17.0263 10.7059 16.6254 10.7927 16.189C10.8795 15.7525 10.835 15.3001 10.6647 14.889C10.4944 14.4778 10.206 14.1264 9.83597 13.8792C9.46596 13.632 9.03095 13.5 8.58594 13.5V12C9.5805 12 10.5343 12.3951 11.2376 13.0983C11.9408 13.8016 12.3359 14.7554 12.3359 15.75C12.3359 16.7446 11.9408 17.6984 11.2376 18.4017C10.5343 19.1049 9.5805 19.5 8.58594 19.5Z" fill="white"/>
<path d="M21.3359 1.5H3.33594C2.93823 1.5004 2.55693 1.65856 2.27572 1.93978C1.9945 2.221 1.83633 2.6023 1.83594 3V21C1.83639 21.3977 1.99458 21.7789 2.27578 22.0602C2.55699 22.3414 2.93825 22.4995 3.33594 22.5H21.3359C21.7336 22.4995 22.1148 22.3413 22.396 22.0601C22.6772 21.7789 22.8354 21.3977 22.8359 21V3C22.8355 2.60232 22.6773 2.22105 22.3961 1.93984C22.1149 1.65864 21.7336 1.50046 21.3359 1.5ZM21.3359 8.25H10.8359V3H21.3359V8.25ZM9.33594 3V8.25H3.33594V3H9.33594ZM3.33594 21V9.75H21.3365L21.3374 21H3.33594Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1039_612">
<rect width="24" height="24" fill="white" transform="translate(0.335938)"/>
</clipPath>
</defs>
</svg>

        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white ring-1 shadow-lg shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white ring-1 shadow-lg shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Make everything simpler
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Mithra AI transforms slow, complex processes into effortless, seamless workflows.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
