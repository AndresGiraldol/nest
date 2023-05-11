import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { GetEstimateDto } from './dto/get-estimate.dto';
import { Report } from './report.entity';
export declare class ReportService {
    private repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateReportDto, user: User): Promise<Report>;
    changeApproval(id: number, approved: boolean): Promise<void>;
    createEstimate({ make, model, year, lng, lat, mileage }: GetEstimateDto): Promise<any>;
}
