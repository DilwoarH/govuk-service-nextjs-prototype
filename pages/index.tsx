import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Start page - GOVUK Service</title>
      </Head>
      <div className="govuk-breadcrumbs">
        <ol className="govuk-breadcrumbs__list">
          <li className="govuk-breadcrumbs__list-item">
            <Link className="govuk-breadcrumbs__link" href="https://www.gov.uk">Home</Link>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <Link className="govuk-breadcrumbs__link" href="#">Coronavirus (COVID-19)</Link>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <Link className="govuk-breadcrumbs__link" href="#">Testing for coronavirus (COVID-19)</Link>
          </li>
        </ol>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">

          <h1 className="govuk-heading-xl govuk-!-margin-top-8">
            Order coronavirus (COVID-19) rapid lateral flow tests
          </h1>

          <p className='govuk-body'>You might be eligible to order a free pack of rapid lateral flow tests to be sent to your home.</p>

          <p className='govuk-body'>Use this service to:</p>

          <ul className="govuk-list govuk-list--bullet">
            <li>check if you’re eligible to order rapid lateral flow tests</li>
            <li>order rapid lateral flow tests to be sent to your home if you’re eligible</li>
          </ul>

          <p className='govuk-body'>This service takes around 5 minutes.</p>

          <Link href="/questions/where-do-you-live" role="button" draggable="false" className="govuk-button govuk-button--start govuk-!-margin-top-2 govuk-!-margin-bottom-8"  data-module="govuk-button">
            Start now
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
            </svg>
          </Link>

          <h2 className="govuk-heading-m">Before you start</h2>

          <p className='govuk-body'>You can also <Link href="#" className='govuk-link'>register by post</Link>.</p>

          <p className='govuk-body'>The online service is also <Link href="#" className='govuk-link'>available in Welsh (ar gael yn Gymraeg)</Link>.</p>

          <p className='govuk-body'>You can’t register for this service if you’re in the UK illegally.</p>

        </div>
      </div>
    </div>
  )
}
