import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Start page - GOVUK Service</title>
      </Head>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Link href="/" className="govuk-back-link">Back</Link>

          <form action="/api/form-submission/where-do-you-live" method="post" noValidate>
            <div className="govuk-form-group govuk-!-margin-top-8">
              <fieldset className="govuk-fieldset">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <h1 className="govuk-fieldset__heading">
                    Where do you live?
                  </h1>
                </legend>
                <div className="govuk-radios govuk-!-margin-top-3" data-module="govuk-radios">
                  <div className="govuk-radios__item">
                    <input className="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio" value="england" />
                    <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live">
                      England
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input className="govuk-radios__input" id="where-do-you-live-2" name="where-do-you-live" type="radio" value="scotland" />
                    <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-2">
                      Scotland
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input className="govuk-radios__input" id="where-do-you-live-3" name="where-do-you-live" type="radio" value="wales" />
                    <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-3">
                      Wales
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input className="govuk-radios__input" id="where-do-you-live-4" name="where-do-you-live" type="radio" value="northern-ireland" />
                    <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-4">
                      Northern Ireland
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <button className="govuk-button govuk-!-margin-top-3" data-module="govuk-button">
              Continue
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
