import { Router } from 'express'
import ProdutoRouter from './produtos.routes.js'
import FornecedorRouter from './fornecedor.routes.js'
import Produto_Fornecedor from './produto_fornecedor.routes.js'
import Orcamento from './orcamento.routes.js'
import Orcamento_Produto from './orcamento_produto.routes.js'
import Projeto from './projeto.routes.js'
import Cliente from './cliente.routes.js'
import PrestadorServico from './prestadorServico.routes.js'
import Projeto_Prestador from './projeto_prestador.routes.js'

const router = Router()

router.use('/produtos', ProdutoRouter)
router.use('/fornecedores', FornecedorRouter)
router.use('/produto_fornecedor', Produto_Fornecedor)
router.use('/orcamentos', Orcamento)
router.use('/orcamento_produto', Orcamento_Produto)
router.use('/projetos', Projeto)
router.use('/clientes', Cliente)
router.use('/prestadorServico', PrestadorServico)
router.use('/projeto_prestador', Projeto_Prestador)

export default router