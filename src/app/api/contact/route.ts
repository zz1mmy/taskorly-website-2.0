import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      )
    }

    // Airtable configuration
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Contacts'

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Prepare data for Airtable
    const airtableData = {
      records: [
        {
          fields: {
            'Name': name,
            'Email': email,
            'Company': company,
            'Phone Number': phone || '',
            'Business Description': message || '',
            'Status': 'New'
          }
        }
      ]
    }

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData)
      }
    )

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text()
      console.error('Airtable API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    const result = await airtableResponse.json()
    console.log('Successfully submitted to Airtable:', result)

    return NextResponse.json(
      { message: 'Form submitted successfully', id: result.records[0].id },
      { status: 200 }
    )

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
