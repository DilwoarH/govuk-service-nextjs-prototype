import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

type PostcodeResult = { id: number, address: string }

export const getServerSideProps: GetServerSideProps<{ data: PostcodeResult[] }> = async ( { req, query } : any ) => {
  const proto = req.headers["x-forwarded-proto"] ? "https" : "http"
  const baseUrl = `${proto}://${req.headers.host}`
  let url = new URL("/api/postcode-search", baseUrl)
  if (query.postcode) url.searchParams.set('postcode', query.postcode)

  const res = await fetch(url.toString())
  const data : PostcodeResult[] = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function QuestionPagePostcode({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { postcode }  = router.query
  const [postcodeValue, setPostcodeValue] : any = useState(postcode)
  const [results, setResults] : any = useState(data)

  const handleChange = async (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const postcode : string = target.value
    setPostcodeValue(postcode)

    let url = new URL("/api/postcode-search", window.location.href)
    if (postcode) url.searchParams.set('postcode', postcode)

    const res = await fetch(url.toString())
    const data : PostcodeResult[] = await res.json()

    setResults(data)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let url = new URL("/api/postcode-search", window.location.href)
    if (postcodeValue) url.searchParams.set('postcode', postcodeValue)

    const res = await fetch(url.toString())
    const data : PostcodeResult[] = await res.json()

    setResults(data)
  }

  return (
    <div>
      <Head>
        <title>What is your postcode? - GOVUK Service</title>
      </Head>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Link href="/" className="govuk-back-link">Back</Link>

          <form action="" method="get" noValidate onSubmit={onSubmit}>
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
                <div id="postcode-hint" className="govuk-hint">
                  Type `E1 8QS` for results
                </div>
                <input className="govuk-input govuk-input--width-10" id="postcode" name="postcode" defaultValue={postcode} onChange={handleChange} type="text" autoComplete="postal-code" aria-describedby="postcode-hint" />
              </div>
            </fieldset>
            <button className="govuk-button govuk-!-margin-top-3" data-module="govuk-button">
              Search
            </button>
          </form>

          {(results && results.length > 0) &&
            <div>
              <h2 className="govuk-heading-m">
                Results matching postcode for {postcodeValue}
              </h2>
              <ul className="govuk-list govuk-list--bullet">
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
