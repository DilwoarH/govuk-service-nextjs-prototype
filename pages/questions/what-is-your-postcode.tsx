import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

type PostcodeResult = { id: number, address: string }


export const getServerSideProps: GetServerSideProps<{ data: PostcodeResult[] }> = async (context) => {
  const res = await fetch(`${context.req.headers.host}/api/postcode-search?postcode=${context.query.postcode}`)
  const data: PostcodeResult[] = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function QuestionPagePostcode({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { postcode }  = router.query
  const [results, setResults] = useState(data)

  return (
    <div>
      <Head>
        <title>Start page - GOVUK Service</title>
      </Head>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Link href="/" className="govuk-back-link">Back</Link>

          <form action="" method="get" noValidate>
            <fieldset className="govuk-fieldset govuk-!-margin-top-8">
              <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                <h1 className="govuk-fieldset__heading">
                  What is your postcode?
                </h1>
              </legend>
              <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="postcode">
                  Postcode
                </label>
                <input className="govuk-input govuk-input--width-10" id="postcode" name="postcode" defaultValue={postcode} type="text" autoComplete="postal-code" />
              </div>
            </fieldset>
            <button className="govuk-button govuk-!-margin-top-3" data-module="govuk-button">
              Search
            </button>
          </form>

          {(results && results.length > 0) &&
            <div>
              <h2 className="govuk-heading-m">
                Results matching postcode
              </h2>
              <ul>
                {results.map( (res : PostcodeResult) => (
                  <li key={res.id}>{res.address}</li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
