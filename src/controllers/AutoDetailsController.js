import { where } from "sequelize";
import AutomobileDetails from "../models/AutoMobileDetails.js"


class AutoMobilleController {
	async create(req, res) {
		try {
			const autoMobille = await AutomobileDetails.create(req.body);

			const newAutomobile = await AutomobileDetails.create({
                color,
                classify,
                horses,
                kilometers
			});

			res.status(201).json(newAutomobile);

		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async getAll(req, res) {
		try {
			const autoMobille = await AutoMobile.getAll();
			res.json(autoMobille);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async getById(req, res) {
		try {
			const autoMobille = await AutoMobile.getById(req.params.id);

			if (!autoMobille) {
				return res.status(404).json({ error: "Veiculo não encontrado" });
			}

			res.json(autoMobille);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async update(req, res) {
		try {
			const [affectedRows, autoMobille] = await AutomobileDetails.update(
				{
					color,
					classify,
					horses,
					kilometers
				},
				{
				where: {
						id,
				},
			}
			);

			if (!affectedRows || affectedRows == 0) {
				return res.status(500).json({
					error: `Não foi possível atualizar o veiculo com id: ${req.params.id}`,
				});
			}

			if (!autoMobille) {
				return res.status(404).json({ error: "Veiculo não encontrado" });
			}

			res.json(autoMobille);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async delete(req, res) {
		try {
			const destroyedRows = await AutomobileDetails.delete(req.params.id);

			if (destroyedRows === 0) {
				return res.status(500).json({
					error: `Não foi possível excluir o veiculo com id: ${req.params.id}`,
				});
			}

			res.json({ message: "Veiculo excluído com sucesso" });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
}

export default new AutoMobilleController();