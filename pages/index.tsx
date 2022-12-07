import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Start page - GOVUK Service</title>
      </Head>
      <div className="govuk-breadcrumbs">
        <ol className="govuk-breadcrumbs__list">
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="https://www.gov.uk">Home</a>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="#">Section</a>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link">Subsection</a>
          </li>
        </ol>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">

          <h1 className="govuk-heading-xl">
            Service name
          </h1>

          <p className='govuk-body'>Use this service to:</p>

          <ul className="govuk-list govuk-list--bullet">
            <li>do something</li>
            <li>update your name, address or other details</li>
            <li>do something else</li>
          </ul>

          <p className='govuk-body'>Registering takes around 5 minutes.</p>

          <a href="#" role="button" draggable="false" className="govuk-button govuk-button--start govuk-!-margin-top-2 govuk-!-margin-bottom-8"  data-module="govuk-button">
            Start now
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
            </svg>
          </a>

          <h2 className="govuk-heading-m">Before you start</h2>

          <p className='govuk-body'>You can also <a href="#" className='govuk-link'>register by post</a>.</p>

          <p className='govuk-body'>The online service is also <a href="#" className='govuk-link'>available in Welsh (ar gael yn Gymraeg)</a>.</p>

          <p className='govuk-body'>You can’t register for this service if you’re in the UK illegally.</p>

        </div>

        <div className="govuk-grid-column-one-third">

          <aside className="app-related-items" role="complementary">
            <h2 className="govuk-heading-m" id="subsection-title">
              Subsection
            </h2>
            <nav role="navigation" aria-labelledby="subsection-title">
              <ul className="govuk-list govuk-!-font-size-16">
                <li>
                  <a href="#" className='govuk-link'>
                    Related link
                  </a>
                </li>
                <li>
                  <a href="#" className='govuk-link'>
                    Related link
                  </a>
                </li>
                <li>
                  <a href="#" className="govuk-!-font-weight-bold govuk-link">
                    More <span className="govuk-visually-hidden">in Subsection</span>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

        </div>
      </div>
    </div>
  )
}
