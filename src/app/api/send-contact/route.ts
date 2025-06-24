import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ success: false, message: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    console.log("💬 Processando contato:", { name: formData.name, email: formData.email })

    const { data: contactData, error: contactError } = await resend.emails.send({
      from: "Green Code Labs <onboarding@resend.dev>",
      to: ["ronaldofojrlol2@gmail.com"],
      subject: `💬 Novo Contato - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">💬 Novo Contato Recebido!</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Informações do Contato:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <p style="margin: 10px 0; font-size: 16px;"><strong>👤 Nome:</strong> ${formData.name}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>📧 Email:</strong> ${formData.email}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>📱 Telefone:</strong> ${formData.phone || "Não informado"}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>🏢 Empresa:</strong> ${formData.company || "Não informado"}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>💰 Orçamento:</strong> ${formData.budget?.[0] ? `R$ ${formData.budget[0].toLocaleString()}` : "Não informado"}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>📏 Projeto:</strong> ${formData.projectSize || "Não informado"}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="color: #1f2937; margin-top: 0;">💬 Mensagem:</h3>
              <p style="line-height: 1.6; color: #374151; font-size: 15px;">${formData.message}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 12px;">
                <strong>📧 Nota:</strong> Este email está sendo enviado para seu email pessoal durante os testes. 
                Para enviar para suporte@greencodelabs.com, você precisa verificar o domínio no Resend.
              </p>
            </div>
            
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin-top: 15px;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>📅 Recebido em:</strong> ${new Date().toLocaleString("pt-BR")}
              </p>
            </div>
          </div>
          
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              Green Code Labs - Sistema de Contato (Teste)
            </p>
          </div>
        </div>
      `,
    })

    if (contactError) {
      console.error("❌ Erro ao enviar email de contato:", contactError)
      return NextResponse.json({ success: false, message: "Erro ao enviar email" }, { status: 500 })
    }

    console.log("✅ Email de contato enviado com sucesso:", {
      name: formData.name,
      email: formData.email,
      contactEmailId: contactData?.id,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Contato enviado com sucesso!",
      contactEmailId: contactData?.id,
    })
  } catch (error) {
    console.error("Erro geral no contato:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}
