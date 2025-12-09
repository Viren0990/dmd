import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validate required fields
    if (!body.firstName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Name, Email, and Phone are required' },
        { status: 400 }
      );
    }

    // 2. Prepare Private Key (Handle newline characters for Vercel/Local)
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replaceAll(String.raw`\n`, '\n');

    if (!privateKey || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
      console.error('Missing Google Sheet environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // 3. Initialize Auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // 4. Initialize Sheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID,
      serviceAccountAuth
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Access the first sheet

    // 5. Add Row to Sheet
    await sheet.addRow({
      Timestamp: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      Name: `${body.firstName} ${body.lastName || ''}`.trim(),
      Phone: body.phone,
      Email: body.email,
      Subject: body.subject || 'No Subject',
      Message: body.message || '',
      Status: 'New' // Default status for new leads
    });

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully!' 
    });

  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
