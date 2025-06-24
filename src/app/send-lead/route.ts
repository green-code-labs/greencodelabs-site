import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, reasons, projectSize, budget, message, source } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ success: false, message: "Nome e email são obrigatórios" }, { status: 400 })
    }

    console.log("🚀 Processando lead do formulário:", { name, email, phone, reasons, projectSize, budget })

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada")
      return NextResponse.json({ success: false, message: "Configuração de email não encontrada" }, { status: 500 })
    }

    const { data, error } = await resend.emails.send({
      from: "Green Code Labs <onboarding@resend.dev>",
      to: ["ronaldofojrlol2@gmail.com"],
      subject: "🚀 Novo Lead - Formulário de Contato - Green Code Labs",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #92d81e, #438e00); padding: 30px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🚀 Novo Lead Recebido!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Formulário de Contato - Green Code Labs</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: white;">
            <h2 style="color: #1f2937; margin-bottom: 30px; font-size: 24px;">📋 Informações do Lead:</h2>
            
            <!-- Informações Básicas -->
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #92d81e;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">👤 Informações Pessoais</h3>
              <p style="margin: 8px 0; font-size: 16px; color: #4b5563;"><strong>Nome:</strong> ${name}</p>
              <p style="margin: 8px 0; font-size: 16px; color: #4b5563;"><strong>📧 Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 8px 0; font-size: 16px; color: #4b5563;"><strong>📱 Telefone:</strong> ${phone}</p>` : ""}
            </div>

            <!-- Detalhes do Projeto -->
            ${
              reasons || projectSize || budget
                ? `
            <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #6bb30f;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">🎯 Detalhes do Projeto</h3>
              ${reasons ? `<p style="margin: 8px 0; font-size: 16px; color: #4b5563;"><strong>Motivos de Contato:</strong> ${reasons}</p>` : ""}
              ${projectSize ? `<p style="margin: 8px 0; font-size: 16px; color: #4b5563;"><strong>Tamanho do Projeto:</strong> ${projectSize}</p>` : ""}
              ${budget ? `<p style="margin: 8px 0; font-size: 16px; color: #4b5563;"><strong>Orçamento:</strong> ${budget}</p>` : ""}
            </div>
            `
                : ""
            }

            <!-- Mensagem -->
            ${
              message
                ? `
            <div style="background: #fefce8; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #7ec617;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">💬 Mensagem</h3>
              <p style="margin: 0; font-size: 16px; color: #4b5563; line-height: 1.6;">${message}</p>
            </div>
            `
                : ""
            }

            <!-- Metadados -->
            <div style="background: #f1f5f9; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px;">📊 Informações Técnicas</h3>
              <p style="margin: 5px 0; font-size: 14px; color: #64748b;"><strong>Origem:</strong> ${source}</p>
              <p style="margin: 5px 0; font-size: 14px; color: #64748b;"><strong>Data/Hora:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
            </div>
            
            <!-- Call to Action -->
            <div style="background: linear-gradient(135deg, #92d81e, #438e00); padding: 20px; border-radius: 12px; text-align: center;">
              <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">⚡ Novo Lead da GreenCodeLabs</h3>
              <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">
                
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              Green Code Labs - Sistema de Captura de Leads
            </p>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 11px;">
              Este email foi gerado automaticamente pelo formulário de contato do site
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("❌ Erro do Resend:", error)
      return NextResponse.json({ success: false, message: "Erro ao enviar email" }, { status: 500 })
    }

    console.log("✅ Email enviado com sucesso via Resend:", {
      name,
      email,
      phone,
      reasons,
      projectSize,
      budget,
      emailId: data?.id,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Formulário enviado com sucesso! Entraremos em contato em breve.",
      emailId: data?.id,
    })
  } catch (error) {
    console.error("❌ Erro geral:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}
